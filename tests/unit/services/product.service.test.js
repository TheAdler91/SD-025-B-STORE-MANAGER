const { expect } = require('chai')
const sinon = require('sinon');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.service');

const PRODUCT_NOT_FOUND_MESSAGE = { message: 'Product not found' }
const { allProductsResponse,
  productSearchNameResponse } = require('../../../__tests__/_dataMock');

describe('Product Service Unit tests', function () {
  afterEach(sinon.restore);

  describe('Method Get tests', function () {
    it('Get all products', async function () {
      sinon.stub(productModel, 'getAll').resolves(allProductsResponse);

      const result = await productService.getAll();
      expect(result.message).to.be.deep.equal(allProductsResponse);
    })

    it('Get a product by id', async function () {
      sinon.stub(productModel, 'findById').resolves(productSearchNameResponse);

      const result = await productService.findById();
      expect(result.message).to.be.deep.equal(productSearchNameResponse);
    })

    it('Product with invalid id', async function () {
      sinon.stub(productModel, 'findById').resolves(undefined);

      const result = await productService.findById();
      expect(result.message).to.be.deep.equal(PRODUCT_NOT_FOUND_MESSAGE);
    })
  });
});