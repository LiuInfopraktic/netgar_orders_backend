const express = require('express');
const router = express.Router();


/**********************
 *    Orders
**********************/
const orders = require("../../controllers/orderphic_controller/orderController");
router.post('/orders', orders.putOrder)

module.exports = router;