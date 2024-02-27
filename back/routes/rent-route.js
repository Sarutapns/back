const express = require('express');
const router = express.Router();
const rentController = require('../controllers/rent-controller');


router.post('/rents', rentController.createRent);

router.get('/rents', rentController.getAllRents);

router.get('/rents/:id', rentController.getRentById);

router.put('/rents/:id', rentController.updateRentById);

router.delete('/rents/:id', rentController.deleteRentById);

module.exports = router;
