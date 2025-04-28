import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addRestaurantsController = async (req, res) => {
  const {
    name,
    foodType,
    location,
    priceRange,
    restaurantType,
    description,
    city,
  } = req.body;

  try {
    if (
      !name ||
      !foodType ||
      !location ||
      !priceRange ||
      !restaurantType ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields are required",
      });
    }
    const restaurant = await prisma.restaurants.create({
      data: {
        name,
        foodType,
        restaurantType,
        city: city.toLowerCase(),
        location,
        priceRange,
        description,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Restaurant added successfully",
      restaurant,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error failed to add restaurant",
    });
  }
};

export const getRestaurantsController = async (req, res) => {
  try {
    const restaurants = await prisma.restaurants.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Restaurants fetched successfully",
      restaurants,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching restaurants",
    });
  }
};

export const getRestaurantByIdController = async (req, res) => {
  const restaurantId = req.params.restaurantId;
  try {
    const restaurant = await prisma.restaurants.findUnique({
      where: {
        id: parseInt(restaurantId),
      },
    });

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Restaurant fetched successfully",
      restaurant,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching restaurant",
    });
  }
};

export const getRestaurationsByCityController = async (req, res) => {
  try {
    const restaurants = await prisma.restaurants.findMany({
      where: {
        city: req.query.city.toLowerCase(),
      },
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Restaurants fetched successfully",
      restaurants,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching restaurants",
    });
  }
};


export const getRandomRestaurantController = async (req, res) => {
  try {
    const restaurants = await prisma.restaurants.findMany();
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const restaurant = restaurants[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random book fetched successfully",
      restaurant,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random book",
      error,
    });
  }
};