const Joi = require('joi');

// product.js
const nameValidation = Joi.object({
  name: Joi.string().min(5).required(),
});

// sale.js

const bodyItemValidation = Joi.object().keys({
  productId: Joi.number().integer().min(1).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const saleValidation = Joi.array().items(bodyItemValidation);

module.exports = {
  nameValidation,
  saleValidation,
};