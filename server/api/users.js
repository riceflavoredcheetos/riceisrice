const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

//Get all users
router.get("/", (req, res, next) => {
  User.findAll({
    attributes: ["id", "email"]
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
