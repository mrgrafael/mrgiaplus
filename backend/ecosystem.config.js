module.exports = {
  apps: [
    {
      name: "mrgiaplus-backend",
      script: "./index.js",
      cwd: "./backend",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    },
    {
      name: "mrgiaplus-frontend",
      script: "npx",
      args: "serve -s dist -l 3000",
      cwd: "./frontend",
      interpreter: "none",
      watch: false
    }
  ]
};