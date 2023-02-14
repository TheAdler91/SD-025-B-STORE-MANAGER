const productModel = require('../models/product.model');

const getAll = async () => {
  const result = await productModel.getAll();
  return { type: null, message: result };
};

module.exports = {
  getAll,
};