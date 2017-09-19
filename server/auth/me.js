const router = require('express').Router();
const User = require('../db/models/user');


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
        } else {
            res.send('Invalid login, please try again.').status(401);
        }
    })
    .catch(next);
})



// router.post('/cart', (req, res, next) => {
//     console.log("Req.session info:", req.session)
//     let newCart = req.session.cart
//             if(newCart.length>0){
//                 newCart.push(req.body)
//                 req.session.cart = newCart
//                 console.log("pushed", req.session)
//             }
//             else {
//                 newCart = [req.body]
//                 req.session.cart = newCart
//                 console.log("added", req.session)
//             }
// })

//GET: current cart for user (logged in and guest)
router.get('/cart', (req, res, next) => {
    res.json(req.session.cart)

})

//POST: request to add items to cart
router.post('/cart', (req, res, next) => {
    req.session.cart = req.session.cart||[]
    req.session.cart.push(req.body)
    console.log('session current ', req.session)
    res.json({})
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
