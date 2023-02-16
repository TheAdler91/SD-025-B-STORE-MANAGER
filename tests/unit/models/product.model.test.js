const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/product.model');
const connection = require('../../../src/models/connection');

const { allProductsResponse, productSearchNameResponse, productUpdateBody } = require('../../../__tests__/_dataMock');

describe('Product Model Unit tests', function () {
  afterEach(sinon.restore);

  describe('Method Get tests', function () {
    it('Get all products', async function () {
      sinon.stub(connection, 'execute').resolves([allProductsResponse]);
      const result = await productModel.getAll();
      expect(result).to.be.deep.equal(allProductsResponse)
    });

    it('Get a product by id', async function () {
      const [ product ] = productSearchNameResponse;
      sinon.stub(connection, 'execute').resolves([[product]]);
      const result = await productModel.findById();
      expect(result).to.be.deep.equal(product)
    });

    describe('Method Post test', function () {
    it('Create a product', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 99 }]);
      const result = await productModel.insert(productUpdateBody);
      expect(result).to.be.equal(99)
      });
    })
  })
})