import express from "express";
import {
  addProgrammingLanguageController,
  getProgrammingLanguageByIdController,
  getProgrammingLanguagesController,
  getRandomProgrammingLanguageController
} from "../index.js";

const router = express.Router();

router.post("/add-programming-language", addProgrammingLanguageController);
router.get(
  "/get-programming-language/:id",
  getProgrammingLanguageByIdController
);
router.get("/get-programming-languages", getProgrammingLanguagesController);
router.get("/random", getRandomProgrammingLanguageController)

export default router;
