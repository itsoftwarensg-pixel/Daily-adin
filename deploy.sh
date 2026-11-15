#!/bin/bash

set -e

# Run migrations only when explicitly requested
RUN_MIGRATIONS=${RUN_MIGRATIONS:-false}

TOTAL_STEPS=5
[ "$RUN_MIGRATIONS" = "true" ] && TOTAL_STEPS=7

STEP=0

step() {
    STEP=$((STEP + 1))
    echo ""
    echo "[$STEP/$TOTAL_STEPS] $1"
}

trap 'echo ""; echo "❌ Deployment failed at step $STEP/$TOTAL_STEPS"' ERR

echo "======================================"
echo "🚀 Next.js Deployment Started"
echo "======================================"

step "📥 Updating source code..."
git fetch --prune
# Previous: git pull origin dev
DEPLOY_BRANCH=${DEPLOY_BRANCH:-main}
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "$DEPLOY_BRANCH" ]; then
    echo "Deploy branch mismatch: checked out $CURRENT_BRANCH, expected $DEPLOY_BRANCH"
    exit 1
fi
git pull --ff-only origin "$DEPLOY_BRANCH"

step "📦 Installing dependencies..."
npm ci

step "🏗️ Building application..."
npm run build

step "♻️ Restarting PM2..."
# Previous: APP_NAME=$(basename "$PWD")
APP_NAME=daily-adin # Matches ecosystem.config.js

if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
    pm2 reload ecosystem.config.js --update-env
else
    pm2 start ecosystem.config.js
fi

step "💾 Saving PM2 configuration..."
pm2 save

echo ""
echo "======================================"
echo "✅ Deployment completed successfully!"
echo "======================================"
