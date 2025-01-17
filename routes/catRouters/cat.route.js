import express from "express";
import {
  getAllCatsController,
  getCatByIdController,
  uploadCatController,
} from "../index.js";

const router = express.Router();

router.get("/get-cats", getAllCatsController);
router.post("/add-cat", uploadCatController);
router.get("/get-cat/:catId", getCatByIdController);

export default router;
