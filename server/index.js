const express = require('express');
const app = express();
const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct);

const port = 7070;
app.listen(port, () => 'Listening on port ' + port);