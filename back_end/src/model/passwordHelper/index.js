const bcrypt = require("bcrypt");

const saltRounds = Symbol("saltRounds");

class PasswordHelper {
  constructor() {
    this[saltRounds] = 10;
  }

  hashPassword(password) {
    return bcrypt.hash(password, this[saltRounds]);
  }

  comparePassword(password, hash) {
    return bcrypt.compare(password, hash);
  }
}

module.exports = PasswordHelper;
