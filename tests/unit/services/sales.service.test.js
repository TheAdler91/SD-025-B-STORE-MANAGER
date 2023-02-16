const { expect } = require('chai');
const sinon = require('sinon');
const saleModel = require('../../../src/models/sale.model');
const saleService = require('../../../src/services/sale.service');
const validation = require('../../../src/services/validations/sale.service.validations');

const { rightSaleBody, saleCreateResponse, wrongSaleNotProductIdBody } = require('../../../__tests__/_dataMock');

const { allSales, saleById } = require('../../mock/sale.mock');

describe('Sale Service unit tests', function () {
  afterEach(sinon.restore);

  describe('Method get tests', function () {
    it('Get all sales', async function () {
      sinon.stub(saleModel, 'getAll').resolves(allSales)

      const result = await saleService.getAll()

      expect(result.message).to.be.deep.equal(allSales)
    })

    it('Find sale by Id', async function () {
      sinon.stub(saleModel, 'findById').resolves(saleById)

      const result = await saleService.findById(1)

      expect(result.message).to.be.deep.equal(saleById)
    })
  })

  describe('Inserting sales', function () {
    it('Insert a sale with a valid products', async function () {
      sinon.stub(validation, 'productForSaleValidation').resolves(true);
      sinon.stub(saleModel, 'insertSale').resolves({ insertId: 3 });
      sinon.stub(saleModel, 'insertSaleProduct')
        .onCall(0).resolves(rightSaleBody[ 0 ])
        .onCall(1).resolves(rightSaleBody[ 1 ]);

      const result = await saleService.insert(rightSaleBody);
      expect(result).to.be.deep.equal({ type: null, message: saleCreateResponse });
    });
     it('Insert an invalid product', async function () {
      sinon.stub(validation, 'productForSaleValidation').resolves(false);

      const result = await saleService.insert(wrongSaleNotProductIdBody);
      expect(result).to.be.deep.equal({ type: 404, message: 'Product not found' });

    });
  });
})