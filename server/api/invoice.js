const router = require("express").Router();
const { Invoice, Order } = require("../db/models");

router.post("/", async (req, res, next) => {
  try {
    const newInvoice = await Invoice.create(req.body);
    await Order.create({
      quantity: req.body.quantity,
      orderPrice: req.body.price,
      invoiceId: newInvoice.id,
      productId: req.body.productId
    });
    res.json(newInvoice);
  } catch (next) {
    next(err);
  }
});

module.exports = router;
