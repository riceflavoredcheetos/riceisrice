const router = require("express").Router();
const { Invoice, Order } = require("../db/models");

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

module.exports = router;


// test with the below json:
//
// {	"user": {
//   "address": "Napoli, Italy",
//   "userId": 3
// },
// "products": [
//   {
//     "productId": 1,
//     "price": 1000,
//     "quantity": 1
//   },
//   {
//     "productId": 2,
//     "price": 2400,
//     "quantity": 5
//   },
//   {
//     "productId": 3,
//     "price": 88,
//     "quantity": 3
//   }
// ]
// }
