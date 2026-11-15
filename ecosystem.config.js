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
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 80,
      },
    },
  ],
};
// Previous trailing expression: ``
