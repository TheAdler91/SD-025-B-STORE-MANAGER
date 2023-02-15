const Joi = require('joi');

const nameValidation = Joi.object({
  name: Joi.string().min(5).required(),
});

module.exports = { nameValidation };