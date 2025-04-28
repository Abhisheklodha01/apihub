import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addCountryController = async (request, res) => {
  const { name, population, capital, currency, description } = request.body;

  try {
    if (!name || !population || !capital || !currency || !description) {
      return res.status(400).json({
        success: false,
        message: "All required fields are required",
      });
    }
    const country = await prisma.country.create({
      data: {
        name,
        population,
        capital,
        currency,
        description,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Country added successfully",
      country,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while adding country",
    });
  }
};


export const getCountriesController = async (request, res) => {
    try {
      const countries = await prisma.country.findMany({
        orderBy: {
          id: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        message: "Countries fetched successfully",
        countries,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Server error while fetching countries",
      });
    }
}


export const getCountryByIdController = async (request, res) => {
    const countryId = parseInt(request.params.id);

    try {
      const country = await prisma.country.findUnique({
        where: {
          id: countryId,
        },
      });

      if (!country) {
        return res.status(404).json({
          success: false,
          message: "Country not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Country fetched successfully",
        country,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Server error while fetching country",
      });
    }
}


export const getRandomCountryController = async (req, res) => {
  try {
    const countries = await prisma.country.findMany();
    const randomIndex = Math.floor(Math.random() * countries.length);
    const country = countries[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random book fetched successfully",
      country,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random book",
      error,
    });
  }
};