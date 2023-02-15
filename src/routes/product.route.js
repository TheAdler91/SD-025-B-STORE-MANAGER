const express = require('express');
const productController = require('../controllers/product.controller');
const productValidation = require('../middlewares/Validation/product.validation');

const router = express.Router();

router.get('/', productController.getAll);

router.get('/:id', productController.findById);

router.post('/', productValidation.validateProduct, productController.insert);

module.exports = router;