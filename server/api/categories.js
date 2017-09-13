const router = require("express").Router();
const { Category } = require("../db/models");

router.get("/", (req, res, next) => {
  Category.findAll({
    order: [["id", "ASC"]]
  })
    .then(allCats => res.json(allCats))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Category.create(req.body)
    .then(newCat => res.json(newCat))
    .catch(next);
});

module.exports = router;
