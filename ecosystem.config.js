module.exports = {
  apps: [
    {
      name: 'daily-adin',
      script: 'npm',
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
``