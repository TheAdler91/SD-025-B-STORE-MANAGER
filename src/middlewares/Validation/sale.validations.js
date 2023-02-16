const { saleValidation } = require('./schema');

const formatError = (message) => message.slice(0, 1)
  + message.slice(5);

const validateSale = (req, res, next) => {
  const sale = req.body;
  const { error } = saleValidation.validate(sale);
  // console.log('validade', error);
  if (error) {
    if (error.details[0].type === 'number.min') {
      return res.status(422)
        .json({ message: formatError(error.details[0].message) });
    }
    if (error.details[0].type === 'any.required') {
      return res.status(400)
        .json({ message: formatError(error.details[0].message) });
    }
  }
  return next();
};

module.exports = { validateSale };