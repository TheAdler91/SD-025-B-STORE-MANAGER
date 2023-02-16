const saleModel = require('../models/sale.model');
const validation = require('./validations/sale.service.validations');

const insert = async (sales) => {
  const isValidList = await validation.productForSaleValidation(sales);
  if (!isValidList) return { type: 404, message: 'Product not found' }; 

  const newSaleId = await saleModel.insertSale();

  await Promise.all(sales.map(async (sale) => {
    await saleModel.insertSaleProduct(newSaleId.insertId, sale);
  }));

  return { type: null, message: { id: newSaleId.insertId, itemsSold: sales } };
};

module.exports = {
  insert,
};