import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addDogsController = async (req, res) => {
  const { name, breed, location, description, imageUrl } = req.body;
  try {
    const dog = await prisma.dog.create({
      data: {
        name,
        breed,
        location,
        description,
        imageUrl,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Dog added successfully",
      dog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error failed to add dog",
    });
  }
};

export const getDogsController = async (req, res) => {
  try {
    const dogs = await prisma.dog.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Dogs fetched successfully",
      dogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error failed to fetched dogs",
    });
  }
};

export const getDogByIdController = async (req, res) => {
  const dogId = req.params.dogId;
  try {
    const dog = await prisma.dog.findUnique({
      where: {
        id: Number(dogId),
      },
    });
    if (!dog) {
      return res.status(404).json({
        success: false,
        message: "Dog not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Dogs fetched successfully",
      dog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error failed to fetched dog",
    });
  }
};

export const getRandomDogController = async (req, res) => {
  try {
    const dogs = await prisma.dog.findMany();
    const randomIndex = Math.floor(Math.random() * dogs.length);
    const dog = dogs[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random dog fetched successfully",
      dog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random dog",
      error,
    });
  }
};
