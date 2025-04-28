import express from "express";
import {
  addPlantsController,
  getAllPlantsController,
  getPlantByIdController,
  uploadImageMiddleware,
  getRandomPlantController
} from "../index.js";

const router = express.Router();

router.post(
  "/add-plant",
  uploadImageMiddleware.upload,
  uploadImageMiddleware.cloudinaryUpload,
  addPlantsController
);
router.get("/get-plants", getAllPlantsController);
router.get("/get-plant/:plantId", getPlantByIdController);
router.get("/random", getRandomPlantController)

export default router;
