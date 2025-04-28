import express from "express";
import {
  getAllCatsController,
  getCatByIdController,
  uploadCatController,
  getRandomCatController
} from "../index.js";

const router = express.Router();

router.get("/get-cats", getAllCatsController);
router.post("/add-cat", uploadCatController);
router.get("/get-cat/:catId", getCatByIdController);
router.get("/random", getRandomCatController)

export default router;
