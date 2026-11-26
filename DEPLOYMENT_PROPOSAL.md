# Daily Adin production deployment proposal

This repository now contains an **unexecuted** release-directory deployment
script. It is not safe to run until the following production details are
confirmed by the operator.

1. Apache must proxy the public site to `127.0.0.1:3000`; it must not point to
   the old checkout directly.
2. PM2 must run the `daily-adin` application using
   `/var/www/dailyadin.com/current/ecosystem.config.js`. Its owner must have
   write access to `releases`, `shared`, and `deploy.lock`.
3. Move the production-only `.env.local` to
   `/var/www/dailyadin.com/shared/.env.local` with restrictive permissions.
   Do not commit or print that file.
4. Keep a separate git checkout at `/var/www/dailyadin.com/repository`. The
   script creates detached worktrees in `releases`; it does not build in
   `current`.
5. Confirm the application readiness path. The default is `/` on port 3000.
   If Apache has a dedicated health endpoint, set `HEALTH_URL` in a reviewed
   future revision rather than weakening the check.

The script takes an exclusive `flock`, builds and validates a new release,
atomically updates `current`, reloads PM2, then uses a local HTTP readiness
check. If the check fails it restores the previous `current` target and reloads
PM2. It retains the prior successful release for rollback.

No production command was run while creating this proposal.
