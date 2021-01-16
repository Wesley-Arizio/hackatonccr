const { v4: uuid } = require("uuid");

const dbConnection = Symbol("dbConnection");
const getUserByEmail = Symbol("getUserByEmail");
const createUser = Symbol("createUser");

class User {
  constructor(connection) {
    this[dbConnection] = connection;
  }

  [getUserByEmail](email) {
    return this[dbConnection]("user").select("name").where("email", email);
  }

  getUserByEmail(email) {
    return this[getUserByEmail](email);
  }

  [createUser]({ name, email, password }) {
    const user = {
      id: uuid(),
      name,
      email,
      password,
    };
    return this[dbConnection]("user").insert(user).returning("id");
  }

  createUser({ name, email, password }) {
    return this[createUser]({ name, email, password });
  }
}

module.exports = User;
