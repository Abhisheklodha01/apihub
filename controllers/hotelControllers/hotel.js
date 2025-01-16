import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addHotelsController = async (req, res) => {
  const { name, location, priceRange, description, city } = req.body;

  try {
    if (!name || !location || !priceRange || !description || !city) {
      return res.status(400).json({
        success: false,
        message: "All required fields are required",
      });
    }
    const hotels = await prisma.hotels.create({
      data: {
        name,
        city: city.toLowerCase(),
        location,
        priceRange,
        description,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Hotel added successfully",
      hotels,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error failed to add hotel",
    });
  }
};

export const getHotelsController = async (req, res) => {
  try {
    const hotels = await prisma.hotels.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Hotles fetched successfully",
      hotels,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching hotels",
    });
  }
};

export const getHotelByIdController = async (req, res) => {
  const hotelId = req.params.hotelId;
  try {
    const restaurant = await prisma.hotels.findUnique({
      where: {
        id: parseInt(hotelId),
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

export const getHotelsByCityController = async (req, res) => {
  try {
    const hotels = await prisma.hotels.findMany({
      where: {
        city: req.query.city.toLowerCase(),
      },
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Hotels fetched successfully",
      hotels,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching hotels",
    });
  }
};
