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
            // req.session.userId = user.id;
            // req.session.isAdmin = user.isAdmin;
            // res.status(200).json(user);
        } else {
            res.send('Invalid login, please try again.').status(401);
        }
    })
    .catch(next);
})


router.post('/cart', (req, res, next) => {
    console.log("Req.session info:", req.session)
    let newCart = req.session.cart
            if(newCart.length>0){
                newCart.push(req.body)
                req.session.cart = newCart
                console.log("pushed", req.session)
            }
            else {
                newCart = [req.body]
                req.session.cart = newCart
                console.log("added", req.session)
            }

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
