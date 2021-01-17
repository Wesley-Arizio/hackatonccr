const JwtHelper = require("../../model/jwtHelper");

async function authMiddleware(request, response, next) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).send({
      error: "É necessario token para autenticar",
    });
  }

  const parts = authorization.split(" ");

  if (!parts === 2) {
    return response.status(401).send({
      error: "Erro no token",
    });
  }

  const [bearer, token] = parts;

  if (!/^Bearer$/i.test(bearer)) {
    return response.status(401).send({ error: "Token malformatado" });
  }

  const jwtHelper = new JwtHelper();

  const { isValid, decoded } = await jwtHelper.verifyToken(token);

  if (!isValid) {
    return response.status(401).send({
      error: "Token Invalido",
    });
  }

  const { id } = decoded;

  request.userId = id;
  return next();
}

module.exports = authMiddleware;
