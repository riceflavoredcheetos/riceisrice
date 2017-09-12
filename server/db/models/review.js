const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  content: {
    type: Sequelize.STRING,
    validate: {
      len: [5, 140]
    }
  }
})

module.exports = Review;
