console.log(process.env.WEB_CONCURRENCY);

module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    instances: process.env.WEB_CONCURRENCY || 1,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}