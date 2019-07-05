const products = require('../products.json');

const getProduct = (req, res) => {
    const foundProduct = products.filter(product => product.id === Number(req.params.id));
    if (foundProduct.length > 0) {
        res.json(foundProduct)
    } else {
        res.status(500).json('Item not in list');
    }
}

module.exports = getProduct;