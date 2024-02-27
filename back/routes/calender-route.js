const express = require('express');
const router = express.Router();
const calenderController = require('../controllers/calender-controller');

router.post('/calenders', calenderController.createCalender);
router.get('/calenders', calenderController.getAllCalenders);
router.get('/calenders/:id', calenderController.getCalenderById);
router.put('/calenders/:id', calenderController.updateCalenderById);
router.delete('/calenders/:id', calenderController.deleteCalenderById);

module.exports = router;
