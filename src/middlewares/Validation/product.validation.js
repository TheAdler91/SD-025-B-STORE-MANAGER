const { nameValidation } = require('./schema');

const validateProduct = (req, res, next) => {
  const { name } = req.body;
  const { error } = nameValidation.validate({ name });
  const { details } = error;

  if (details) {
    if (details[0].type === 'string.min') {
      return res.status(422).json({ message: details[0].message });
    }
    if (details[0].type === 'any.required') {
      return res.status(400).json({ message: details[0].message });
    }
  }

  return next();
};

module.exports = { validateProduct };