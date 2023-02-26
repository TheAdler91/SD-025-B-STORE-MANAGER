const { productModel } = require('../models');
const validation = require('./validations/product.service.validation');

const getAll = async () => {
  const result = await productModel.getAll();
  return { type: null, message: result };
};

const findById = async (id) => {
  const result = await productModel.findById(id);
  if (!result) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: result };
};

const insert = async (name) => {
  const error = validation.validateProduct({ name });
  if (error.type) return error;
  const resultId = await productModel.insert(name);
  const result = await productModel.findById(resultId);

  return { type: null, message: result };
};

const remove = async (id) => {
  const result = await productModel.findById(id);
  if (!result) return { type: 'PRODUCT_NOT_FOUND', message: { message: 'Product not found' } };

  await productModel.remove(id);

  return { type: null, message: null };
};

module.exports = {
  getAll,
  findById,
  insert,
  remove,
};