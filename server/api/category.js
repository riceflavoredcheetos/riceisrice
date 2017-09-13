const router = require('express').Router()
const {Category} = require('../db/models'); 
module.exports = router


router.get('/', (req, res, next) => {
    Category.findAll()
        .then(allCats => res.json(allCats))
        .catch(next);
})


router.post('/', (req, res, next) => {
    Category.create(req.body)
        .then(newCat => res.json(newCat))
        .catch(next);
})

