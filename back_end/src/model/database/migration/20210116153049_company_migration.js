exports.up = function (knex) {
  return knex.schema.createTable("company", (table) => {
    table.uuid("id").primary().unique().notNullable();
    table.string("name").notNullable();
    table.string("companyType").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
