import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addCarsController = async (req, res) => {
  const { name, model, year, description, mileage } = req.body;
  const imageUrl = req.imageUrl;
  try {
    if (!name || !model || !year || !mileage || !description) {
      return res.status(400).json({
        success: false,
        message: "Make, model, year, color, and description are required",
      });
    }
    const car = await prisma.cars.create({
      data: {
        name,
        model,
        year: parseInt(year),
        mileage: parseInt(mileage),
        description,
        imageUrl,
      },
    });
    return res.status(201).json({
      success: true,
      message: "Car created successfully",
      car,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while creating car",
      error,
    });
  }
};

export const getAllCarsController = async (req, res) => {
  try {
    const cars = await prisma.cars.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Cars fetched successfully",
      cars,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching cars",
      error,
    });
  }
};

export const getCarByIdController = async (req, res) => {
  const carId = parseInt(req.params.carId);
  try {
    const car = await prisma.cars.findUnique({
      where: {
        id: carId,
      },
    });
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Car fetched successfully",
      car,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching car",
      error,
    });
  }
};
