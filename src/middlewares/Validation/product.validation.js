const { nameValidation } = require('./schema');

const validateProduct = (req, res, next) => {
  const { name } = req.body;
  const { error } = nameValidation.validate({ name });

  if (error) {
    if (error.details[0].type === 'string.min') {
      return res.status(422).json({ message: error.details[0].message });
    }
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    }
  }

  return next();
};

module.exports = { validateProduct };