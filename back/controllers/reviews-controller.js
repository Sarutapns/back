const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createReview = async (req, res, next) => {
  const { comment, userId, dressesId } = req.body;
  try {
    const review = await prisma.reviews.create({
      data: {
        comment,
        user: { connect: { id: userId } },
        dresses: { connect: { id: dressesId } },
      },
    });
    res.status(201).json({ review });
  } catch (error) {
    next(error);
  }
};

exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await prisma.reviews.findMany(); 
    res.status(200).json({ reviews });
  } catch (error) {
    next(error);
  }
};

exports.getReviewById = async (req, res, next) => {
  const reviewId = req.params.id;
  try {
    const review = await prisma.reviews.findUnique({
      where: { id: parseInt(reviewId) },
    });
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ review });
  } catch (error) {
    next(error);
  }
};

exports.updateReviewById = async (req, res, next) => {
  const reviewId = req.params.id;
  const { comment, userId, dressesId } = req.body;
  try {
    const updatedReview = await prisma.reviews.update({
      where: {
        id: parseInt(reviewId),
      },
      data: {
        comment,
        user: { connect: { id: userId } },
        dresses: { connect: { id: dressesId } },
      },
    });
    res.status(200).json({ review: updatedReview });
  } catch (error) {
    next(error);
  }
};

exports.deleteReviewById = async (req, res, next) => {
  const reviewId = req.params.id;
  try {
    await prisma.reviews.delete({
      where: {
        id: parseInt(reviewId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
