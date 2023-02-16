const productModel = require('../../models/product.model');

const productForSaleValidation = async (sales) => {
  const result = (await Promise
    .all(Object
      .values(sales)
      .map(async (sale) => productModel.findById(sale.productId)))); 
  return result.every((product) => product !== undefined);
};

module.exports = {
  productForSaleValidation,
};