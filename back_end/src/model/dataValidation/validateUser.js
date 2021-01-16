const Joi = require("joi");

class ValidateUser {
  validCreatedUser({ name, email, password }) {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    });

    return schema.validate({ name, email, password });
  }
}

module.exports = ValidateUser;
