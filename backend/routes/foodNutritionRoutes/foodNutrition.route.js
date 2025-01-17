import express from "express";
import {
  addFoodNutritionController,
  getFoodNutritionByIdController,
  getFoodNutritionController,
  getRandomFoodNutritionController
} from "../index.js";

const router = express.Router();

router.get("/get-foodnutritions", getFoodNutritionController);
router.get("/get-foodnutrition/:id", getFoodNutritionByIdController);
router.post("/add-foodnutrition", addFoodNutritionController);
router.get("/get-random-foodnutrientation",getRandomFoodNutritionController);

export default router;
