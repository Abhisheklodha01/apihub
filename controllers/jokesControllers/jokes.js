import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addJokeController = async (req, res) => {
  const { title, type, description } = req.body;

  try {
    if (!title || !type || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, type, and description are required",
      });
    }
    const joke = await prisma.jokes.create({
      data: {
        title,
        type,
        description,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Joke created successfully",
      joke,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while creating joke",
      error,
    });
  }
};

export const getJokesController = async (req, res) => {
  try {
    const jokes = await prisma.jokes.findMany();
    return res.status(200).json({
      success: true,
      message: "Jokes fetched successfully",
      jokes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching jokes",
      error,
    });
  }
};

export const getJokeByIdController = async (req, res) => {
  const jokeId = parseInt(req.params.id);
  try {
    const joke = await prisma.jokes.findUnique({
      where: {
        id: jokeId,
      },
    });
    if (!joke) {
      return res.status(404).json({
        success: false,
        message: "Joke not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Joke fetched successfully",
      joke,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Joke not found",
      error,
    });
  }
};

export const getRandomJokeController = async (req, res) => {
  try {
    const jokes = await prisma.jokes.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random joke fetched successfully",
      joke,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random joke",
      error,
    });
  }
};
