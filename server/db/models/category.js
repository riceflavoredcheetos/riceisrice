const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  type: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Category;
