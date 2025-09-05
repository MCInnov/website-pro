module.exports = {
  apps: [
    {
      name: "maxidevsolution",
      script: "/home/user/app/maxidevsolution/.output/server/index.mjs",
      interpreter: "node",
      autorestart: true,
      watch: false,
    },
  ],
};
