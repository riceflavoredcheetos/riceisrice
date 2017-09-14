const router = require('express').Router();
const User = require('../db/models/user');


//find or create user 
router.put('/', (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({
        where: { email, password }
    })
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

module.exports = router;