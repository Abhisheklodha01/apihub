import express from "express";
import {
  addCarsController,
  getAllCarsController,
  getCarByIdController,
  uploadImageMiddleware,
  getRandomCarController
} from "../index.js";

const router = express.Router();

router.post(
  "/add-car",
  uploadImageMiddleware.upload,
  uploadImageMiddleware.cloudinaryUpload,
  addCarsController
);
router.get("/get-cars", getAllCarsController);
router.get("/get-car/:carId", getCarByIdController);
router.get("/random", getRandomCarController)

export default router;
