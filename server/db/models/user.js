const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    // unique: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  isGuest: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  googleId: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

module.exports = User;

/**
 * instanceMethods
 */

// User.prototype.correctPassword = function (candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt) === this.password
// }

/**
 * classMethods
 */

// User.generateSalt = function () {
//   return crypto.randomBytes(16).toString('base64')
// }

// User.encryptPassword = function (plainText, salt) {
//   return crypto.createHash('sha1').update(plainText).update(salt).digest('hex')
// }

/**
 * hooks
 */

// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password, user.salt)
//   }
// }

// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)
