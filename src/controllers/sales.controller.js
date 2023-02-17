const { saleService } = require('../services');

const getAll = async (_req, res) => {
  const { type, message } = await saleService.getAll();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.findById(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const insert = async (req, res) => {
  const sale = req.body;
  const { type, message } = await saleService.insert(sale);

  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

module.exports = {
  insert,
  getAll,
  findById,
};