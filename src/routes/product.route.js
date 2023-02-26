const express = require('express');
const { productController } = require('../controllers');
const { productValidation } = require('../middlewares/Validation');

const router = express.Router();

router.get('/', productController.getAll);

router.get('/:id', productController.findById);

router.post('/', productValidation.validateFieldName, productController.insert);

router.delete('/:id', productController.remove);

module.exports = router;