const saleService = require('../services/sale.service');

const insert = async (req, res) => {
  const sale = req.body;
  const { type, message } = await saleService.insert(sale);

  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

module.exports = {
  insert,
};