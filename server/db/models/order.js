const Sequelize = require("sequelize");
const Product = require("./product");
const db = require("../db");

const Order = db.define("order", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  orderPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  }
});

Order.afterBulkCreate(instances => {
  const orders = instances.map(instance => {
    return { id: instance.productId, quantitySold: instance.quantity };
  });

  Product.prototype.inventorySold(orders);
});

module.exports = Order;
