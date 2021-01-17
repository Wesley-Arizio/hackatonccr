const express = require("express");

const connection = require("../../model/database/connection");

const ValidateUser = require("../../model/dataValidation/validateUser");
const User = require("../../model/user");
const PasswordHelper = require("../../model/passwordHelper/index");
const JwtHelper = require("../../model/jwtHelper");

const routes = express.Router();

routes.post("/user/auth", async (request, response) => {
  const { email, password } = request.body;

  const validateUser = new ValidateUser();

  const { error } = validateUser.validLoginUser({ email, password });

  if (error) {
    return response.status(400).send({
      error: "Dados invalidos",
    });
  }

  const user = new User(connection);

  try {
    const [thisUserExist] = await user.getUserByEmail(email);

    if (!thisUserExist) {
      return response.status(400).send({
        error: "Usuário não existe",
      });
    }

    const passwordHelper = new PasswordHelper();

    const isPasswordCorrect = await passwordHelper.comparePassword(
      password,
      thisUserExist.password
    );

    if (!isPasswordCorrect) {
      return response.status(400).send({
        error: "Senha incorreta",
      });
    }

    const jwtHelper = new JwtHelper();

    const token = jwtHelper.generateToken(thisUserExist.id);

    return response.status(200).send({
      token,
      userId: thisUserExist.id,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Erro interno");
  }
});

module.exports = routes;
