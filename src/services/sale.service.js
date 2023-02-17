const { saleModel } = require('../models');
const validation = require('./validations/sale.service.validations');

const getAll = async () => {
  const result = await saleModel.getAll();
  return { type: null, message: result }; 
};

const findById = async (id) => {
  const result = await saleModel.findById(id);
  if (!result || result.length === 0) return { type: 404, message: 'Sale not found' };

  return {
    type: null,
    message: result.map((sale) => {
      const { saleId, ...resume } = sale;
      return resume;
    }),
  }; 
};

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
  getAll,
  findById,
};