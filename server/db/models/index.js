const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const Order = require("./order");
const Category = require("./category");
const categoryType = require("./categoryType");
//change to productcategory*****************

Product.belongsToMany(Category, { through: categoryType });
Category.belongsToMany(Product, { through: categoryType });
Product.hasMany(Review, {onDelete: 'cascade'});
User.hasMany(Order);
Product.hasMany(Order);

module.exports = {
  User,
  Product,
  Review,
  Order,
  Category,
  categoryType
};


