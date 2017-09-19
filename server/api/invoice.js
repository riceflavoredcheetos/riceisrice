const router = require("express").Router();
const { Invoice, Order } = require("../db/models");


module.exports = router;

router.get('/', (req, res, next) => {
  Invoice.findAll()
    .then(invoices => {
      res.json(invoices)
    })
    .catch(next(err))
})


router.post("/", async (req, res, next) => {
  // we should change this user part, so that this information is from req.user
  const userInfo = req.body.user;
  const productInfo = req.body.products;

  try {
    const newInvoice = await Invoice.create(userInfo);
    const newOrders = productInfo.map(obj => ({
      quantity: obj.quantity,
      orderPrice: obj.price,
      invoiceId: newInvoice.id,
      productId: obj.productId
    }));
    await Order.bulkCreate(newOrders);
    res.json(newInvoice);
  } catch (err) {
    next(err);
  }
});






