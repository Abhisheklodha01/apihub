import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addProductController = async (req, res) => {
  const { name, price, categories, availableOn, description, url } = req.body;
  try {
    if (
      !name ||
      !price ||
      !categories ||
      !availableOn ||
      !description ||
      !url
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const data = await prisma.products.create({
      data: {
        name,
        price,
        categories,
        availableOn,
        description,
        url,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Product added successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while adding product",
      error,
    });
  }
};

export const getProductsController = async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (errro) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching products",
      error: errro,
    });
  }
};

export const getProductByIdController = async (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const product = await prisma.products.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching product",
      error: error,
    });
  }
};

export const getRandomProductController = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const randomIndex = Math.floor(Math.random() * products.length);
    const product = products[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random video fetched successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random product",
      error,
    });
  }
};
