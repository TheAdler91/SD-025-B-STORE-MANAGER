const connection = require('./db/connection');

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT 
      sp.sale_id AS saleId,
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN  StoreManager.sales AS s
      ON sp.sale_id = s.id
    ORDER BY sp.sale_id, sp.product_id`,
  );
  return result;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT 
      sp.sale_id AS saleId,
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN  StoreManager.sales AS s
      ON sp.sale_id = s.id
      AND sp.sale_id = ${id}
    ORDER BY sp.sale_id, sp.product_id`,
  );
  return result;
};

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
  getAll,
  findById,
};