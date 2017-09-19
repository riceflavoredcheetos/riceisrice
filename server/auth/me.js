const router = require('express').Router();
const User = require('../db/models/user');

addToCart = (cart, newProduct) => {
    let newCart = cart.slice()
    if (newCart.length) {
        var check = 0;
        for (var i = 0; i < newCart.length; i++) {
            if (newCart[i].product.id === newProduct.product.id) {
                newCart[i].quantity += newProduct.quantity;
            } else {
                check++;
            }
        }
        if (check === newCart.length) newCart.push(newProduct)
        // newCart.map(item => {
        //     item.product.id === newProduct.product.id
        //     ? item.quantity += newProduct.quantity
        //     : newCart.push(newProduct)
        // })
    } else {
        newCart.push(newProduct)
    }
    return newCart
}

//loads user after refresh
router.get('/', (req, res, next) => {
    res.json(req.user);
})

//find user
router.put('/', (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({
        where: { email, password }
    })
    .then(user => {
        if (user) {
            req.login(user, err => {
                if (err) return next(err)
                res.json(user)
            })
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
    req.session.cart = addToCart(req.session.cart, req.body)
    res.json(req.body)
})

//create user
router.post('/signup', (req, res, next) => {
    const { email, password } = req.body;
    User.findOrCreate({ email, password })
    .then(user => {
        req.login(user, err => {
            if (err) return next(err)
            res.json(user)
        })
    })
    .catch(next);
})

//logout 'me'
router.delete('/', function(req, res, next) {
    req.logout()
    res.sendStatus(204);
})



module.exports = router;
