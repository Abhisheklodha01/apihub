import express from 'express';
import {
  addQuotesController,
  getQuotesController,
  getRandomQuoteController,
  getQuoteByIdController,
} from "../index.js";

const router = express.Router();

router.post("/add-quote", addQuotesController)
router.get("/get-quotes", getQuotesController)
router.get("/get-random-quote", getRandomQuoteController)
router.get("/get-quote/:quoteId", getQuoteByIdController)

export default router