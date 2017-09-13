const Sequelize = require("sequelize");
const db = require("../db");

const invoice = db.define("invoice", {
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Created",
    validate: {
      isIn: [
        ["Created", "Processing", "Cancelled", "Completed"]
      ]
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = invoice;
