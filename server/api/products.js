const router = require('express').Router();
const {Product} = require('../db/models');

//get all products
router.get('/', (req, res, next) => {
    Product.findAll()
        .then(products => res.json(products))
        .catch(next);
})

//get single product
router.get('/:productId', (req, res, next ) => {
    let productId = req.params.productId;

    Product.findById(productId)
        .then(singleProduct => res.json(singleProduct))
        .catch(next)
})


//admin feature : post new product
router.post('/', (req, res, next) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(next);
})


//admin feature : update product
router.put('/:productId', (req, res, next) => {
    let productId = req.params.productId;

    Product.findById(productId)
        .then(singleProduct => singleProduct.update(req.body))
        .then(updatedProduct => res.json(updatedProduct))
        .catch(next)
})

//admin feature : deleteproduct
router.delete('/:productId', (req, res, next) => {
    let id = req.params.productId;

    Product.destroy({where: {id}})
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router;