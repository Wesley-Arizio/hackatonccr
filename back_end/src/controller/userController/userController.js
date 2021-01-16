const express = require("express");

const connection = require("../../model/database/connection");

const ValidateUser = require("../../model/dataValidation/validateUser");
const User = require("../../model/user");

const routes = express.Router();

routes.post("/user", async (request, response) => {
  const { name, email, password } = request.body;

  const validateUser = new ValidateUser();
  const user = new User(connection);

  const { error } = validateUser.validCreatedUser({ name, email, password });

  if (error) {
    console.log(error);
    return response.status(400).send({
      error: "Dados invalidos",
    });
  }
  try {
    const thisUserExist = await user.getUserByEmail(email);

    if (thisUserExist.length > 0) {
      return response.status(401).send({
        error: "Usuário já existente",
      });
    }

    const [createdUser] = await user.createUser({ name, email, password });

    if (!createdUser) {
      return response.status(400).send({ error: "Erro ao cadastrar usuário" });
    }

    return response.status(200).send({
      id: createdUser,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Erro Interno");
  }
});

module.exports = routes;
