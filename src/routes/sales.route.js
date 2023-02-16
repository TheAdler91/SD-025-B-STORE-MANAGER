const express = require('express');
const saleController = require('../controllers/sales.controller');
const saleValidation = require('../middlewares/Validation/sale.validations');

const router = express.Router();

router.get('/', saleController.getAll);

router.get('/:id', saleController.findById);

router.post('/', saleValidation.validateSale, saleController.insert);

module.exports = router;