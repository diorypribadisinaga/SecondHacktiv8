
const Usercontrollers = require("./UserController")
const productController = require("./productController");
const penjualanController = require("./penjualanController");
const penawaranController = require("./penawaranController");
const wishlistController = require("./wishlistController");
const notifController = require("./notifController");
const usercontrollers = new Usercontrollers()

module.exports = {
  usercontrollers, productController, penjualanController, penawaranController, wishlistController, notifController
};
