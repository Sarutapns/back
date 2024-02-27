const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment-controller');

router.post('/payments', paymentController.createPayment);
router.get('/payments', paymentController.getAllPayments);
router.get('/payments/:id', paymentController.getPaymentById);
router.put('/payments/:id', paymentController.updatePaymentById);
router.delete('/payments/:id', paymentController.deletePaymentById);

module.exports = router;
