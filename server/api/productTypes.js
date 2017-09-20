const router = require("express").Router();
const { productType } = require("../db/models");

// get all productTypes
router.get("/", (req, res, next) => {
  productType.findAll()
    .then(allProductTypes => res.json(allProductTypes))
    .catch(next);
});

//get single product's categories
router.get("/:productId", (req, res, next) => {
  let productId = req.params.productId;
  productType.findAll({
      where: {
          productId
       }})
    .then(singleProductProductTypes => res.json(singleProductProductTypes))
    .catch(next);
});

router.post("/", (req, res, next) => {
  productType.create(req.body)
    .then(allProductTypes => res.json(allProductTypes))
    .catch(next);
});

router.delete("/:productId", (req, res, next) => {
  let productId = req.params.productId;

  productType.destroy({ where: { productId } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
