const router = require('express').Router();
const User = require('../db/models/user');


//loads user after refresh
router.get('/', (req, res, next) => {
    User.findById(req.session.userId)
        .then(res.json.bind(res))
        .catch(next)
})

//find user
router.put('/', (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({
        where: { email, password }
    })
    .then(user => {
        if (user) {
            req.session.userId = user.id;
            req.session.isAdmin = user.isAdmin;
            res.status(200).json(user);

        } else {
            res.send('Invalid login, please try again.').status(401);
        }
    })
    .catch(next);
})

//GET: current cart for user (logged in and guest)
router.get('/cart', (req, res, next) => {
    res.json(req.session.cart)
})

//POST: request to add items to cart
router.post('/cart', (req, res, next) => {
    req.session.cart = req.session.cart||[]
    req.session.cart.push(req.body)
    console.log('session current ', res.session.cart)
    res.json({})
})

//create user
router.post('/signup', (req, res, next) => {
    const { email, password } = req.body;
    User.create({ email, password })
    .then(user => {
        if (user) {
            req.session.userId = user.id;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(next);
})



//logout 'me'
router.delete('/', function(req, res, next) {
    delete req.session.userId;
    res.sendStatus(200);
})



module.exports = router;
