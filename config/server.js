module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    netlify_build: {
      name: "Trigger Netlify Build",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    },
  },
});
