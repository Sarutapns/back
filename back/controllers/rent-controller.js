const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createRent = async (req, res, next) => {
  const { rentDate, serviceDate, status, userId, dressesId } = req.body;
  try {
    const rent = await prisma.rent.create({
      data: {
        rentDate,
        serviceDate,
        status,
        user: { connect: { id: parseInt(userId) } }, // แปลง userId เป็น integer
        dresses: { connect: { id: parseInt(dressesId) } }, 
      },
    });
    res.status(201).json({ rent });
  } catch (error) {
    next(error);
  }
};

exports.getAllRents = async (req, res, next) => {
  try {
    const rents = await prisma.rent.findMany(); 
    res.status(200).json({ rents });
  } catch (error) {
    next(error);
  }
};

exports.getRentById = async (req, res, next) => {
  const rentId = req.params.id;
  try {
    const rent = await prisma.rent.findUnique({
      where: { id: parseInt(rentId) },
    });
    if (!rent) {
      return res.status(404).json({ message: "Rent not found" });
    }
    res.status(200).json({ rent });
  } catch (error) {
    next(error);
  }
};

exports.updateRentById = async (req, res, next) => {
  const rentId = req.params.id;
  const { rentDate, serviceDate, status, userId, dressesId } = req.body;
  try {
    const updatedRent = await prisma.rent.update({
      where: {
        id: parseInt(rentId),
      },
      data: {
        rentDate,
        serviceDate,
        status,
        user: { connect: { id: parseInt(userId) } }, // แปลง userId เป็น integer
        dresses: { connect: { id: parseInt(dressesId) } }, 
      },
    });
    res.status(200).json({ rent: updatedRent });
  } catch (error) {
    next(error);
  }
};

exports.deleteRentById = async (req, res, next) => {
  const rentId = req.params.id;
  try {
    await prisma.rent.delete({
      where: {
        id: parseInt(rentId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
