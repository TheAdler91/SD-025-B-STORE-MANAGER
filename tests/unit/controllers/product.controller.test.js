const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);

const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');

const { allProductsResponse,
  productSearchNameResponse,
productUpdateBody } = require('../../../__tests__/_dataMock');

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
  describe('Method Post test', function () { 
    it('Create a product', async function () { 
       const res = {};
       const req = {
        body: productUpdateBody,
       };
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'insert').resolves({ type: null, message: productSearchNameResponse })

      await productController.insert(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(productSearchNameResponse);

    });
  });
});