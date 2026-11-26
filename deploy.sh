#!/usr/bin/env bash

# Atomic, release-directory deployment for Daily Adin.
#
# This script is deliberately NOT executed by CI or npm. It must first be
# reviewed against the production Apache/PM2 setup. It expects this layout:
#   /var/www/dailyadin.com/repository  (the git checkout used to create releases)
#   /var/www/dailyadin.com/releases    (immutable builds)
#   /var/www/dailyadin.com/current     (symlink used by PM2)
#   /var/www/dailyadin.com/shared/.env.local (server-owned, never in git)
#
# It never builds in `current`, so a failed npm install/build cannot corrupt the
# artifacts serving readers. Set DEPLOY_BRANCH or DEPLOY_COMMIT to select code.

set -Eeuo pipefail
IFS=$'\n\t'
umask 027

APP_ROOT="${APP_ROOT:-/var/www/dailyadin.com}"
REPOSITORY_DIR="${REPOSITORY_DIR:-$APP_ROOT/repository}"
RELEASES_DIR="$APP_ROOT/releases"
SHARED_DIR="${SHARED_DIR:-$APP_ROOT/shared}"
CURRENT_LINK="$APP_ROOT/current"
ENV_FILE="${ENV_FILE:-$SHARED_DIR/.env.local}"
LOCK_FILE="$APP_ROOT/deploy.lock"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-main}"
DEPLOY_COMMIT="${DEPLOY_COMMIT:-}"
APP_NAME="${APP_NAME:-daily-adin}"
PORT="${PORT:-3000}"
KEEP_RELEASES="${KEEP_RELEASES:-5}"

require_command() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Required command is missing: $1" >&2
    exit 1
  }
}

cleanup_failed_release() {
  local exit_code=$?
  if [[ -n "${NEW_RELEASE:-}" && -d "$NEW_RELEASE" && "${DEPLOY_SUCCEEDED:-false}" != "true" ]]; then
    echo "Deployment failed; leaving failed release for inspection: $NEW_RELEASE" >&2
  fi
  exit "$exit_code"
}

trap cleanup_failed_release ERR

for command in git npm pm2 curl flock readlink; do require_command "$command"; done
[[ -d "$REPOSITORY_DIR/.git" ]] || { echo "Repository not found: $REPOSITORY_DIR" >&2; exit 1; }
[[ -f "$ENV_FILE" ]] || { echo "Shared environment file not found: $ENV_FILE" >&2; exit 1; }
[[ -L "$CURRENT_LINK" ]] || {
  echo "Refusing first release: $CURRENT_LINK must already be a release symlink." >&2
  echo "Complete the reviewed one-time migration in DEPLOYMENT_PROPOSAL.md first." >&2
  exit 1
}

mkdir -p "$RELEASES_DIR"
exec 9>"$LOCK_FILE"
flock -n 9 || { echo "Another deployment is already running." >&2; exit 1; }

git -C "$REPOSITORY_DIR" fetch --prune origin
if [[ -z "$DEPLOY_COMMIT" ]]; then
  DEPLOY_COMMIT="$(git -C "$REPOSITORY_DIR" rev-parse "origin/$DEPLOY_BRANCH^{commit}")"
fi
git -C "$REPOSITORY_DIR" cat-file -e "$DEPLOY_COMMIT^{commit}"

RELEASE_ID="$(date -u +%Y%m%d%H%M%S)-${DEPLOY_COMMIT:0:12}"
NEW_RELEASE="$RELEASES_DIR/$RELEASE_ID"
[[ ! -e "$NEW_RELEASE" ]] || { echo "Release already exists: $NEW_RELEASE" >&2; exit 1; }

echo "Creating release $RELEASE_ID"
git -C "$REPOSITORY_DIR" worktree add --detach "$NEW_RELEASE" "$DEPLOY_COMMIT"

# Runtime configuration stays outside every release and is never copied into git.
ln -s "$ENV_FILE" "$NEW_RELEASE/.env.local"

echo "Installing dependencies and building the new release"
(
  cd "$NEW_RELEASE"
  npm ci
  npm run build
)

[[ -f "$NEW_RELEASE/.next/BUILD_ID" ]] || { echo "Missing Next.js BUILD_ID" >&2; exit 1; }
[[ -f "$NEW_RELEASE/node_modules/next/dist/bin/next" ]] || { echo "Missing Next.js runtime" >&2; exit 1; }

PREVIOUS_TARGET="$(readlink -f "$CURRENT_LINK")"

rollback() {
  echo "Readiness check failed; restoring the previous release." >&2
  if [[ -n "$PREVIOUS_TARGET" && -d "$PREVIOUS_TARGET" ]]; then
    ln -sfn "$PREVIOUS_TARGET" "$CURRENT_LINK"
    APP_CURRENT_PATH="$CURRENT_LINK" pm2 reload "$CURRENT_LINK/ecosystem.config.js" --only "$APP_NAME" --update-env
  fi
}

# The symlink change is atomic. PM2's cwd is explicitly set in ecosystem.config.js.
ln -sfn "$NEW_RELEASE" "$CURRENT_LINK"
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  APP_CURRENT_PATH="$CURRENT_LINK" pm2 reload "$CURRENT_LINK/ecosystem.config.js" --only "$APP_NAME" --update-env
else
  APP_CURRENT_PATH="$CURRENT_LINK" pm2 start "$CURRENT_LINK/ecosystem.config.js" --only "$APP_NAME" --env production
fi

ready=false
for attempt in {1..12}; do
  if curl --fail --silent --show-error --max-time 5 "http://127.0.0.1:$PORT/" >/dev/null; then
    ready=true
    break
  fi
  sleep 2
done

if [[ "$ready" != "true" ]]; then
  rollback
  exit 1
fi

pm2 save
DEPLOY_SUCCEEDED=true
echo "Release $RELEASE_ID is ready."

# Keep the active release, the immediately rollbackable release, and a small
# history. Failed releases are intentionally retained for investigation.
mapfile -t old_releases < <(find "$RELEASES_DIR" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' | sort -nr | awk -v keep="$KEEP_RELEASES" 'NR > keep { print $2 }')
for release in "${old_releases[@]:-}"; do
  [[ "$release" == "$PREVIOUS_TARGET" ]] && continue
  git -C "$REPOSITORY_DIR" worktree remove --force "$release"
done
