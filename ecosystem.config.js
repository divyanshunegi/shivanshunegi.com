module.exports = {
  apps: [
    {
      name: 'shivanshunegi.com',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      watch: false,
      autorestart: true,
    },
  ],
};
