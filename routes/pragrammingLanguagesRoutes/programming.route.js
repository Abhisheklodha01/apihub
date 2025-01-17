import express from "express";
import {
  addProgrammingLanguageController,
  getProgrammingLanguageByIdController,
  getProgrammingLanguagesController,
} from "../index.js";

const router = express.Router();

router.post("/add-programming-language", addProgrammingLanguageController);
router.get(
  "/get-programming-language/:id",
  getProgrammingLanguageByIdController
);
router.get("/get-programming-languages", getProgrammingLanguagesController);

export default router;
