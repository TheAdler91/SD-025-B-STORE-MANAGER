const productService = require('../services/product.service');

const getAll = async (_req, res) => {
  const { type, message } = await productService.getAll();
  if (type) return res.status(type).json(message);
  res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(id);
  if (type) return res.status(type).json(message);
  res.status(200).json(message);
};

const insert = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.insert(name);
  if (type) return res.status(type).json(message);
  res.status(201).json(message);
};

module.exports = {
  getAll,
  findById,
  insert,
};