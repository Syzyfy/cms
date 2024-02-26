module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      header: ["Authorization", "Content-Type"],
      origin: [
        "http://localhost:3000",
        "https://localhost",
        "https://localhost:1337",
        "http://carpye.ddns.net:1337",
        "https://thefinalpath.vercel.app",
        "https://api.thefinalpath.net"
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",

  { resolve: 'src/middlewares/admin-redirect' }
];
