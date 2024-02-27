const express = require('express');
const router = express.Router();
const dressesController = require('../controllers/dresses-controller');

router.post('/dresses', dressesController.createDresses);
router.get('/dresses', dressesController.getAllDresses);
router.get('/dresses/:id', dressesController.getDressesById);
router.put('/dresses/:id', dressesController.updateDressesById);
router.delete('/dresses/:id', dressesController.deleteDressesById);

module.exports = router;
