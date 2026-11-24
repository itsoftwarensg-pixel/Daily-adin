module.exports = {
  apps: [
    {
      name: 'daily-adin',
      // Previous: script: 'npm', args: 'start',
      // Previous: instances: 2. Next.js 15's default tag invalidation is
      // process-local. Use one worker until a shared cache handler is configured.
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      watch: false,
      time: true,
      // PM2 automatically replaces a crashed worker. Exponential backoff keeps
      // a repeatedly failing process from consuming all CPU while it recovers.
      exp_backoff_restart_delay: 100,
      restart_delay: 1000,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        // Nginx owns 80/443 and proxies traffic to Next.js on this local port.
        PORT: 3000,
      },
    },
  ],
};
// Previous trailing expression: ``
