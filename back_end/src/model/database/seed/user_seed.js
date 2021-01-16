const uuid = require("uuid");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      return knex("user").insert([
        {
          id: uuid.v4(),
          name: "felipe",
          email: "felipe@gmail.com",
          password: "senhasecreta123",
        },
        {
          id: uuid.v4(),
          name: "bruno",
          email: "bruno@gmail.com",
          password: "senhasecreta123",
        },
        {
          id: uuid.v4(),
          name: "maria",
          email: "maria@gmail.com",
          password: "senhasecreta123",
        },
      ]);
    });
};
