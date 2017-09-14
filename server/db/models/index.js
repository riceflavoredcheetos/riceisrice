const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const Order = require("./order");
const Invoice = require("./invoice");
const Category = require("./category");
const productType = require("./productType");

Product.belongsToMany(Category, { through: productType });
Category.belongsToMany(Product, { through: productType });
Product.hasMany(Review, {onDelete: 'cascade'});
Invoice.hasMany(Order);
Product.hasMany(Order);
Invoice.belongsTo(User, { through: Invoice });

module.exports = {
  User,
  Product,
  Review,
  Order,
  Invoice,
  Category,
  productType
};
