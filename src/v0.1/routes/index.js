const express = require('express');
const router = express.Router();

/**********************
 *    Login
**********************/
const login = require("../../controllers/login_controller/loginController");
router.post('/login', login.login);

/**********************
 *    Orders
**********************/
const orders = require("../../controllers/order_controller/orderController");
router.get('/orders', orders.getOrders)
router.post('/orders', orders.putOrder)

/*********************
 * Contacts
**********************/
const contacts = require("../../controllers/contacts_controller/contactsController");
router.get('/contacts', contacts.getContacts)

/*********************
 * Documents
**********************/
const documents = require("../../controllers/documents_controller/documentsController");
router.get('/documents', documents.getDocuments)

module.exports = router;