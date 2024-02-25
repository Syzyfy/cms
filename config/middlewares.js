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
        "http://carpye.ddns.net:1337",
        "https://thefinalpath.vercel.app",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
