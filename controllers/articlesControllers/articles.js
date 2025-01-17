import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addArticleController = async (req, res) => {
  const { title, author, content } = req.body;
  try {
    if (!title || !author || !content) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const data = await prisma.articles.create({
      data: {
        title,
        author,
        content,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Article uploaded successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while uploading article",
      error,
    });
  }
};

export const getArticlesController = async (req, res) => {
  try {
    const data = await prisma.articles.findMany();
    return res.status(200).json({
      success: true,
      message: "Articles fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching articles",
      error,
    });
  }
};

export const getArticleByIdController = async (req, res) => {
  try {
    const articleId = parseInt(req.params.id);
    const data = await prisma.articles.findUnique({
      where: {
        id: articleId,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Article fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching article",
      error,
    });
  }
};

export const getRandomArticleController = async (req, res) => {
  try {
    const articles = await prisma.articles.findMany();
    const randomIndex = Math.floor(Math.random() * articles.length);
    const data = articles[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random article fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random article",
      error,
    });
  }
};
