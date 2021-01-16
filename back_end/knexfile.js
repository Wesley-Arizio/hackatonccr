// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
    },
    searchPath: ["knex", "public"],
    migrations: {
      schema: "public",
      directory: `${__dirname}/src/model/database/migration/`,
    },
    seeds: {
      directory: `${__dirname}/src/model/database/seed/`,
    },
  },
};
