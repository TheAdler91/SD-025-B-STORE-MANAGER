const express = require('express');
const { saleController } = require('../controllers');
const { saleValidation } = require('../middlewares/Validation');

const router = express.Router();

router.get('/', saleController.getAll);

router.get('/:id', saleController.findById);

router.post('/', saleValidation.validateSale, saleController.insert);

module.exports = router;