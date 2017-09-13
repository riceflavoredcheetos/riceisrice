const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
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
  },
  invoiceId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
})

module.exports = Order;
