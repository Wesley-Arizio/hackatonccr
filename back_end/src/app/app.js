const express = require("express");

const UserController = require("../controller/userController/userController");

const app = express();

app.use(express.json());
app.use(UserController);

module.exports = app;
