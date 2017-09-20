const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;




//Get all users
router.get("/", (req, res, next) => {
  User.findAll({
  })
    .then(users => res.json(users))
    .catch(next);
});

//Get user by id
router.get("/:userId", (req, res, next) => {
  let id = req.params.userId;

  User.findOne({ where: { id } })
    .then(user => res.json(user))
    .catch(next);
});

router.put("/:userId", (req, res, next) => {
  console.log("Req.body.user:", req.body)
  return User.update({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.admin
  },{
    where: {
      id:req.params.userId
    }
  })
  .then((updatedInfo) => {
    res.status(200).json(updatedInfo).end()})
  .catch(next);
})

//create new user
router.post("/", (req, res, next) => {
  User.create(req.body)
    .then(newUsers => res.json(newUsers))
    .catch(next);
});

//delete user
router.delete("/:userId", (req, res, next) => {
  let id = req.params.userId;

  User.destroy({ where: { id } })
    .then(res.sendStatus(204))
    .catch(next);
});
