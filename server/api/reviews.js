const router = require('express').Router();
const {Review} = require('../db/models');

//get all product reviews
router.get('/:productId', (req, res, next) => {
    let productId = req.params.productId;
    Review.findAll({where: {productId}})
        .then(reviews => res.json(reviews))
        .catch(next);
})

//author feature: post new review
router.post('/', (req, res, next) => {
    Review.create(req.body)
        .then(newReview => res.json(newReview))
        .catch(next);
})


//admin feature : update review
router.put('/:reviewId', (req, res, next) => {
    let reviewId = req.params.reviewId;

    Review.findById(reviewId)
        .then(singleReview => singleReview.update(req.body))
        .then(updatedReview => res.json(updatedReview))
        .catch(next)
})

//admin feature : delete review
router.delete('/:reviewId', (req, res, next) => {
    let id = req.params.reviewId;
    Review.destroy({where: {id}})
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router;
