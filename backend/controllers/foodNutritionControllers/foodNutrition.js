import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addFoodNutritionController = async (req, res) => {
  const { food_name, servingSize, calories, protein, carbohydrates, fats } =
    req.body;
  try {
    if (
      !food_name ||
      !servingSize ||
      !calories ||
      !protein ||
      !carbohydrates ||
      !fats
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const food = await prisma.foodNutritions.create({
      data: {
        food_name,
        servingSize,
        calories: parseInt(calories),
        protein: parseInt(protein),
        carbohydrates: parseInt(carbohydrates),
        fats: parseInt(fats),
      },
    });
    return res.status(200).json({
      success: true,
      message: "Food and Nutrientation uploaded successfully",
      food,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while uploading food and nutrientation",
      error,
    });
  }
};

export const getFoodNutritionController = async (req, res) => {
  try {
    const food = await prisma.foodNutritions.findMany();
    return res.status(200).json({
      success: true,
      message: "Food and Nutrientation fetched successfully",
      food,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching food and nutrientation",
      error,
    });
  }
};

export const getFoodNutritionByIdController = async (req, res) => {
  const foodId = parseInt(req.params.id);
  try {
    const food = await prisma.foodNutritions.findUnique({
      where: {
        id: foodId,
      },
    });
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Food and Nutrientation fetched successfully",
      food,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching food and nutrientation",
      error,
    });
  }
};

export const getRandomFoodNutritionController = async (req, res) => {
  try {
    const foods = await prisma.foodNutritions.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const randomIndex = Math.floor(Math.random() * foods.length);
    const food = foods[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random joke fetched successfully",
      food,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random joke",
      error,
    });
  }
};
