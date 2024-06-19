const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/customers', customerController.createCustomer);
router.get('/customers', customerController.getAllCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.put('/customers/:id', customerController.updateCustomerById);
router.delete('/customers/:id', customerController.deleteCustomerById);

module.exports = router;
