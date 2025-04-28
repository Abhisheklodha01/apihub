import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addPlantsController = async (req, res) => {
  const { name, species, description } = req.body;
  const imageUrl = req.imageUrl;
  try {
    if (!name || !species || !description) {
      return res.status(400).json({
        success: false,
        message: "Name, species, and description are required",
      });
    }
    const plant = await prisma.plants.create({
      data: {
        name,
        species,
        description,
        imageUrl
      },
    });
    return res.status(201).json({
      success: true,
      message: "Flower created successfully",
      plant,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while creating plant",
      error,
    });
  }
};

export const getAllPlantsController = async (req, res) => {
  try {
    const plants = await prisma.plants.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Plants fetched successfully",
     plants,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching plants",
      error,
    });
  }
};

export const getPlantByIdController = async (req, res) => {
  const plantId = parseInt(req.params.plantId);
  try {
    const plant = await prisma.plants.findUnique({
      where: {
        id: plantId,
      },
    });
    if (!plant) {
      return res.status(404).json({
        success: false,
        message: "Plant not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Plant fetched successfully",
      plant,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching Plant",
      error,
    });
  }
};


export const getRandomPlantController = async (req, res) => {
  try {
    const plants = await prisma.plants.findMany();
    const randomIndex = Math.floor(Math.random() * plants.length);
    const plant = plants[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random book fetched successfully",
      plant,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random book",
      error,
    });
  }
};