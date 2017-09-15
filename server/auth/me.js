const router = require('express').Router();
const User = require('../db/models/user');


//find user 
router.put('/', (req, res, next) => {
    const { email, password } = req.body;
    console.log('reqbody', req.body);
    User.findOne({
        where: { email, password }
    })
    .then(user => {
        if (user) {
            req.session.userId = user.id;
            res.status(200).json(user);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(next);
})

//create user 
router.post('/signup', (req, res, next) => {
    const { email, password } = req.body;

    User.create({ email, password })
    .then(user => {
        if (user) {
            req.session.userId = user.id;
            res.status(200).json(user);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(next);
})





module.exports = router;