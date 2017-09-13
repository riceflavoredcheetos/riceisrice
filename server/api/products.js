const router = require("express").Router();
const { Product, categoryType } = require("../db/models");

//get all products
router.get("/", (req, res, next) => {
  Product.findAll({
    order: [["id", "DESC"]]
  })
    .then(products => res.json(products))
    .catch(next);
});

//get single product
router.get("/:productId", (req, res, next) => {
  let productId = req.params.productId;

  Product.findById(productId)
    .then(singleProduct => res.json(singleProduct))
    .catch(next);
});

// admin feature : post new product and categoryType
router.post("/", async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body)
        await categoryType.create({
            productId: req.body.id,
            categoryId: req.body.categoryId
        })
        res.json(newProduct)
    } catch (err) {
        next(err)
    }   
}); 


//admin feature : update product
router.put("/:productId", async (req, res, next) => {
  let productId = req.params.productId;

  try {
      const product = await Product.findById(productId)
      const updated = await product.update(req.body)
      res.json(updated)
  } catch(err) {
      next(err)
  }
});

//admin feature : delete product & reviews tied to the specific product
router.delete("/:productId", (req, res, next) => {
  let id = req.params.productId;

  Product.destroy({ where: { id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
