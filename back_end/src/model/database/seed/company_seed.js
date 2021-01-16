const uuid = require("uuid");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      return knex("company").insert([
        {
          id: uuid.v4(),
          name: "company1",
          companyType: "small",
          email: "company1@gmail.com",
          password: "senhasecreta123",
        },
        {
          id: uuid.v4(),
          name: "company2",
          companyType: "large",
          email: "company2@gmail.com",
          password: "senhasecreta123",
        },
        {
          id: uuid.v4(),
          name: "company3",
          companyType: "small",
          email: "company4@gmail.com",
          password: "senhasecreta123",
        },
      ]);
    });
};
