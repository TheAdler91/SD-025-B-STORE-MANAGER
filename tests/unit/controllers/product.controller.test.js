const { expect } = require('chai')
const sinon = require('sinon');
const productController = require('../../../src/controllers/product.controller');
const productService = require('../../../src/services/product.service');

const { allProductsResponse,
  productSearchNameResponse } = require('../../../__tests__/_dataMock');

describe('Product Controller Unit tests', function () {
  afterEach(sinon.restore);

  describe('Method Get tests', function () {
    it('Get all products', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getAll').resolves({ type: null, message: allProductsResponse })

      await productController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProductsResponse);
    });

    it('Get a product by id', async function () {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'findById').resolves({ type: null, message: productSearchNameResponse })

      await productController.findById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productSearchNameResponse);
    });

    it('Product with an invalid invalid id', async function () {
      const res = {};
      const req = {
        params: { id: 10 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'findById').resolves({ type: 404, message: { message: 'Product not found' } })

      await productController.findById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
  });
});