import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const uploadCatController = async (req, res) => {
  try {
    const { name, breed, location, imageUrl, description } = req.body;
    if (!name || !breed || !location || !imageUrl || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const cat = await prisma.cat.create({
      data: {
        name,
        breed,
        location,
        imageUrl,
        description,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Cat created successfully",
      cat,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllCatsController = async (req, res) => {
  try {
    const cats = await prisma.cat.findMany();
    return res.status(200).json({
      success: true,
      message: "Cats fetched successfully",
      cats,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server failed to fetch cat",
    });
  }
};

export const getCatByIdController = async (req, res) => {
  const catId = req.params.catId;
  try {
    const cat = await prisma.cat.findUnique({
      where: {
        id: Number(catId),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Cat fetched successfully",
      cat,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server failed to fetch cat",
    });
  }
};
