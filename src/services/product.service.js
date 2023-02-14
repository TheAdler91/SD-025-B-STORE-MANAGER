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

module.exports = {
  getAll,
  findById,
};