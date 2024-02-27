const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCalender = async (req, res, next) => {
  const { availableDate, dressesId } = req.body;
  try {
    const calender = await prisma.calender.create({
      data: {
        availableDate,
        dresses: { connect: { id: dressesId } },
      },
    });
    res.status(201).json({ calender });
  } catch (error) {
    next(error);
  }
};

exports.getAllCalenders = async (req, res, next) => {
  try {
    const calenders = await prisma.calender.findMany();
    res.status(200).json({ calenders });
  } catch (error) {
    next(error);
  }
};

exports.getCalenderById = async (req, res, next) => {
  const calenderId = req.params.id;
  try {
    const calender = await prisma.calender.findUnique({
      where: { id: parseInt(calenderId) },
    });
    if (!calender) {
      return res.status(404).json({ message: "Calender not found" });
    }
    res.status(200).json({ calender });
  } catch (error) {
    next(error);
  }
};

exports.updateCalenderById = async (req, res, next) => {
  const calenderId = req.params.id;
  const { availableDate, dressesId } = req.body;
  try {
    const updatedCalender = await prisma.calender.update({
      where: {
        id: parseInt(calenderId),
      },
      data: {
        availableDate,
        dresses: { connect: { id: dressesId } },
      },
    });
    res.status(200).json({ calender: updatedCalender });
  } catch (error) {
    next(error);
  }
};

exports.deleteCalenderById = async (req, res, next) => {
  const calenderId = req.params.id;
  try {
    await prisma.calender.delete({
      where: {
        id: parseInt(calenderId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
