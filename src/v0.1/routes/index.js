const express = require('express');
const router = express.Router();


/**********************
 *    Orders
**********************/
const orders = require("../../controllers/order_controller/orderController");
router.post('/orders', orders.putOrder)

module.exports = router;