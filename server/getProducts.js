const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price) {
        const filteredProducts = products.filter(product => product.price >= Number(req.query.price));
        res.json(filteredProducts);
    } else {
        res.json(products);
    }
}

module.exports = getProducts;