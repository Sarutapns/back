const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews-controller');

router.post('/reviews', reviewsController.createReview);
router.get('/reviews', reviewsController.getAllReviews);
router.get('/reviews/:id', reviewsController.getReviewById);
router.put('/reviews/:id', reviewsController.updateReviewById);
router.delete('/reviews/:id', reviewsController.deleteReviewById);

module.exports = router;
 