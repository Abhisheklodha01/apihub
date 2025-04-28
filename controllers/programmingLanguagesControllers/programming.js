import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addProgrammingLanguageController = async (req, res) => {
  const { name, description, creator, year, runtime } = req.body;

  try {
    if (!name || !description || !creator || !year || !runtime) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const programmingLanguage = await prisma.programmingLanguage.create({
      data: {
        name,
        description,
        creator,
        year,
        runtime,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Programming language created successfully",
      programmingLanguage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while creating programming language",
      error,
    });
  }
};

export const getProgrammingLanguagesController = async (req, res) => {
  try {
    const programmingLanguages = await prisma.programmingLanguage.findMany();

    return res.status(200).json({
      success: true,
      message: "Programming languages fetched successfully",
      programmingLanguages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching programming languages",
      error,
    });
  }
};

export const getProgrammingLanguageByIdController = async (req, res) => {
  const programmingLanguageId = parseInt(req.params.id);

  try {
    const programmingLanguage = await prisma.programmingLanguage.findUnique({
      where: {
        id: programmingLanguageId,
      },
    });

    if (!programmingLanguage) {
      return res.status(404).json({
        success: false,
        message: "Programming language not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Programming language fetched successfully",
      programmingLanguage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching programming language",
      error,
    });
  }
};


export const getRandomProgrammingLanguageController = async (req, res) => {
  try {
    const programmingLanguages = await prisma.programmingLanguage.findMany();
    const randomIndex = Math.floor(Math.random() * programmingLanguages.length);
    const programmingLanguage = programmingLanguages[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random book fetched successfully",
      programmingLanguage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random book",
      error,
    });
  }
};