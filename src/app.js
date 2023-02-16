const express = require('express');
const { productRouter, saleRouter } = require('./routes');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar /productss
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/products', productRouter);
app.use('/sales', saleRouter);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;