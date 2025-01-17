import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addQuotesController = async (req, res) => {
  const { author, quote } = req.body;
  try {
    if (!author || !quote) {
      return res.status(400).json({
        success: false,
        message: "Author and quote required",
      });
    }
    const quote = await prisma.quotes.create({
      data: {
        author,
        quote,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Quote added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while adding quote",
      error,
    });
  }
};

export const getQuotesController = async (req, res) => {
  try {
    const quotes = await prisma.quotes.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Quotes fetched successfully",
      quotes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching quotes",
      error,
    });
  }
};

export const getQuoteByIdController = async (req, res) => {
  const quoteId = parseInt(req.params.quoteId);
  try {
    const quote = await prisma.quotes.findUnique({
      where: {
        id: quoteId,
      },
    });
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Quote fetched successfully",
      quote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching quote",
      error,
    });
  }
};

export const getRandomQuoteController = async (req, res) => {
  try {
    const quotes = await prisma.quotes.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    return res.status(200).json({
      success: true,
      message: "Random quote fetched successfully",
      quote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching random quote",
      error,
    });
  }
};
