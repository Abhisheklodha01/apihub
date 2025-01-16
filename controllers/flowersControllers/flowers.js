import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addFlowersController = async (req, res) => {
  const { name, color, flowerType, description } = req.body;
  const imageUrl = req.imageUrl;
  try {
    if (!name || !color || !flowerType || !description) {
      return res.status(400).json({
        success: false,
        message: "Name, color, flower type, and description are required",
      });
    }
    const flower = await prisma.flowers.create({
      data: {
        name,
        color,
        flowerType,
        description,
        imageUrl
      },
    });
    return res.status(201).json({
      message: "Flower created successfully",
      data: flower,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while creating flower",
      error,
    });
  }
};

export const getAllFlowersController = async (req, res) => {
  try {
    const flowers = await prisma.flowers.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      message: "Flowers fetched successfully",
      data: flowers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while fetching flowers",
      error,
    });
  }
};

export const getFlowerByIdController = async (req, res) => {
  const flowerId = parseInt(req.params.id);
  try {
    const flower = await prisma.flowers.findUnique({
      where: {
        id: flowerId,
      },
    });
    if (!flower) {
      return res.status(404).json({
        message: "Flower not found",
      });
    }
    return res.status(200).json({
      message: "Flower fetched successfully",
      flower,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while fetching flower",
      error,
    });
  }
};
