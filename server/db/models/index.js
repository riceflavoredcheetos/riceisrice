const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const Order = require("./order");
const Invoice = require("./invoice");
const Category = require("./category");
<<<<<<< HEAD
const productType = require("./productType");
=======
const categoryType = require("./categoryType");
//change to productcategory*****************
>>>>>>> 9a63cf67581e482404fdace48811bcc0c1ffada5

Product.belongsToMany(Category, { through: productType });
Category.belongsToMany(Product, { through: productType });
Product.hasMany(Review, {onDelete: 'cascade'});
Invoice.hasMany(Order);
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
<<<<<<< HEAD



=======
>>>>>>> 8e74869e3c82700b6666cd06d81ae305391eaeef
