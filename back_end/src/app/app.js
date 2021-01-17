const express = require("express");

const UserController = require("../controller/userController/userController");
const AuthController = require("../controller/authController/authController");
const AuthMiddleware = require("../controller/middleware/auth");

const app = express();

app.use(express.json());
app.use(UserController);
app.use(AuthController);
app.use(AuthMiddleware);

module.exports = app;
