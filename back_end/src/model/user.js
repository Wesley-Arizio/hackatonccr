const { v4: uuid } = require("uuid");

const PasswordHelper = require("./passwordHelper");

const dbConnection = Symbol("dbConnection");
const getUserByEmail = Symbol("getUserByEmail");
const createUser = Symbol("createUser");
const passwordHelper = Symbol("passwordHelper");

class User {
  constructor(connection) {
    this[dbConnection] = connection;
    this[passwordHelper] = new PasswordHelper();
  }

  [getUserByEmail](email) {
    return this[dbConnection]("user").select("*").where("email", email);
  }

  getUserByEmail(email) {
    return this[getUserByEmail](email);
  }

  async [createUser]({ name, email, password }) {
    const hashPassword = await this[passwordHelper].hashPassword(password);

    const user = {
      id: uuid(),
      name,
      email,
      password: hashPassword,
    };
    return this[dbConnection]("user").insert(user).returning("id");
  }

  createUser({ name, email, password }) {
    return this[createUser]({ name, email, password });
  }
}

module.exports = User;
