import express from "express";
import {
  getArticleByIdController,
  getArticlesController,
  getRandomArticleController,
  addArticleController,
} from "../index.js";

const router = express.Router();

router.get("/get-articles", getArticlesController);
router.get("/get-article/:id", getArticleByIdController);
router.get("/get-random-article", getRandomArticleController);
router.post("/add-article", addArticleController);

export default router;
