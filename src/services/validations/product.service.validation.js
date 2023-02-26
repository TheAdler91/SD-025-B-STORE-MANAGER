const nameValidation = require('./schema');

const validateProduct = (name) => {
  const { error } = nameValidation.validate(name);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateProduct,
};