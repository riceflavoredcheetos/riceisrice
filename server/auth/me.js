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
            console.log("PUT")
            req.session.userId = user.id;
            req.session.isAdmin = user.isAdmin;
            res.status(200).json(user);

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
    req.session.destroy();
    res.sendStatus(200);
})



module.exports = router;
