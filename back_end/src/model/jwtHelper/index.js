require("dotenv").config();
const { request } = require("express");
const jwt = require("jsonwebtoken");

const secretKey = Symbol("secretKey");

class JwtHelper {
  constructor() {
    this[secretKey] = process.env.TOKEN_KEY;
  }

  generateToken(id) {
    return jwt.sign({ id }, `${this[secretKey]}`, { expiresIn: "1d" });
  }

  verifyToken(token) {
    return jwt.verify(token, `${this[secretKey]}`, (error, decoded) => {
      if (error) {
        return { isValid: false };
      }

      return {
        isValid: true,
        decoded,
      };
    });
  }
}

module.exports = JwtHelper;
