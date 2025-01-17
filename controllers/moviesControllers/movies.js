import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addMoviesController = async (req, res) => {
  const { title, description, director, realeDate } = req.body;
  const poster = req.imageUrl;
  try {
    if (!title || !description || !director || !realeDate) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const movie = await prisma.movies.create({
      data: {
        title,
        description,
        director,
        realeDate,
        poster,
      },
    });

    return res.status(200).json({
      success: false,
      message: "Movie created successfully",
      movie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error unable to add movie",
    });
  }
};

export const getMoviesController = async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Movies fetched successfully",
      movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error unable to fetch movies",
    });
  }
};

export const getMovieByIdController = async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const movie = await prisma.movies.findUnique({
      where: {
        id: Number(movieId),
      },
    });
    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Movie fetched successfully",
      movie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error unable to fetch movie",
    });
  }
};

export const getRandomMovieController = async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random movie fetched successfully",
      movie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random movie",
      error,
    });
  }
};
