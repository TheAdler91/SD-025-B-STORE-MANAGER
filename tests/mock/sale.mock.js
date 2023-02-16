const allSales = [
  {
    "saleId": 1,
    "date": "2022-11-14T18:57:55.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-11-14T18:57:55.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-11-14T18:57:55.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const saleById = [
  {
    "date": "2023-02-16T21:47:04.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const validSaleBody = [
  {productId:3,quantity:1},
];

module.exports = {
  allSales,
  saleById,
  validSaleBody,
}