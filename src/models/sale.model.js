const connection = require('./connection');

const insertSale = async () => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (now())',
    [],
  );
  return result;
};

const insertSaleProduct = async (saleId, sale) => {
  const [result] = await connection.execute(
    `INSERT INTO StoreManager.sales_products 
     (sale_id, product_id, quantity)
     VALUES(?, ?, ?)`,
    [saleId, ...Object.values(sale)],
    );
  return result;
};

module.exports = {
  insertSale,
  insertSaleProduct,
};