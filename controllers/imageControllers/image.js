import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const uploadImageController = async (req, res) => {
  const { name, description } = req.body;
  const imageUrl = req.imageUrl;
  try {
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "Image name and description required",
      });
    }

    const image = await prisma.image.create({
      data: {
        name: name,
        description: description,
        url: imageUrl,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      image,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error failed to upload image",
    });
  }
};

export const getImagesController = async (req, res) => {
  try {
    const images = await prisma.image.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Images find successfully",
      images,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error unable to find images",
    });
  }
};

export const getImageByIdController = async (req, res) => {
  const imageId = req.params.imageId;
  try {
    const image = await prisma.image.findUnique({
      where: {
        id: Number(imageId),
      },
    });
    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Image find successfully",
      image,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error unable to find image",
    });
  }
};

export const getRandomImageController = async (req, res) => {
  try {
    const images = await prisma.image.findMany();
    const randomIndex = Math.floor(Math.random() * images.length);
    const image = images[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random image fetched successfully",
      image,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random image",
      error,
    });
  }
};
