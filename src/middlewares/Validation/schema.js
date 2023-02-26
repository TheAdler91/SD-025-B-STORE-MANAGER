const Joi = require('joi');

// sale.js

const bodyItemValidation = Joi.object().keys({
  productId: Joi.number().integer().min(1).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const saleValidation = Joi.array().items(bodyItemValidation);

module.exports = {
  saleValidation,
};