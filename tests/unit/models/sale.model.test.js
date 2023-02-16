const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const saleModel = require('../../../src/models/sale.model');

const { rightSaleBody } = require('../../../__tests__/_dataMock');
const { allSales, saleById } = require('../../mock/sale.mock');

describe('Sale Model unit tests', function () {
  afterEach(sinon.restore)
  
  describe('Method Get test', function () {
    it('Get all sales', async function () {
      sinon.stub(connection, 'execute').resolves([allSales]);
      const result = await saleModel.getAll();
      expect(result).to.be.deep.equal(allSales);
    })
     it('Find sales by id', async function () {
      sinon.stub(connection, 'execute').resolves([saleById]);
      const result = await saleModel.findById();
      expect(result).to.be.deep.equal(saleById);
    });
  })

  describe('Method Post test', function () {
    it('Insert new sale', async function () {
       sinon.stub(connection, 'execute').resolves([ { insertId: 1 } ]);
      const result = await saleModel.insertSaleProduct(10, rightSaleBody[ 0 ]);
      expect(result).to.be.deep.equal({ insertId: 1 });
    })
  })
});