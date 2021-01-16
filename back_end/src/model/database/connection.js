const Knex = require("knex");

const config = require("../../../knexfile");

const connnection = Knex(config.development);

module.exports = connnection;
