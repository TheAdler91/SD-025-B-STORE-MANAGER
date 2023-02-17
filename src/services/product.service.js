const productModel = require('../models/product.model');

const getAll = async () => {
  const result = await productModel.getAll();
  return { type: null, message: result };
};

const findById = async (id) => {
  const result = await productModel.findById(id);
  if (!result) return { type: 404, message: { message: 'Product not found' } };
  return { type: null, message: result };
};

const insert = async (product) => {
  const resultId = await productModel.insert(product);
  const result = await productModel.findById(resultId);

  return { type: null, message: result };
};

const remove = async (id) => {
  const result = await productModel.findById(id);
  if (!result) return { type: 404, message: { message: 'Product not found' } };

  await productModel.remove(id);

  return { type: null, message: null };
};

module.exports = {
  getAll,
  findById,
  insert,
  remove,
};