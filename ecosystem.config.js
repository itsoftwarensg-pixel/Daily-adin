module.exports = {
  apps: [
    {
      name: 'daily-adin',
      // Previous: script: 'npm', args: 'start',
      // Run Next.js in the actual Node workers so PM2 can share the port.
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 2,
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
