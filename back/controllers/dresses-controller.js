const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createDresses = async (req, res, next) => {
  const { dressesName, dressesType, color, size, price } = req.body;
  try {
    const dresses = await prisma.dresses.create({
      data: {
        dressesName,
        dressesType,
        color,
        size,
        price,
      },
    });
    res.status(201).json({ dresses });
  } catch (error) {
    next(error);
  }
};

exports.getAllDresses = async (req, res, next) => {
  try {
    const dresses = await prisma.dresses.findMany();
    res.status(200).json({ dresses });
  } catch (error) {
    next(error);
  }
};

exports.getDressesById = async (req, res, next) => {
  const dressesId = req.params.id;
  try {
    const dresses = await prisma.dresses.findUnique({
      where: { id: parseInt(dressesId) },
    });
    if (!dresses) {
      return res.status(404).json({ message: "Dresses not found" });
    }
    res.status(200).json({ dresses });
  } catch (error) {
    next(error);
  }
};

exports.updateDressesById = async (req, res, next) => {
  const dressesId = req.params.id;
  const { dressesName, dressesType, color, size, price } = req.body;
  try {
    const updatedDresses = await prisma.dresses.update({
      where: {
        id: parseInt(dressesId),
      },
      data: {
        dressesName,
        dressesType,
        color,
        size,
        price,
      },
    });
    res.status(200).json({ dresses: updatedDresses });
  } catch (error) {
    next(error);
  }
};

exports.deleteDressesById = async (req, res, next) => {
  const dressesId = req.params.id;
  try {
    await prisma.dresses.delete({
      where: {
        id: parseInt(dressesId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
