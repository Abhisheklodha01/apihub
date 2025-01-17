import express from "express";
import {
  addPlantsController,
  getAllPlantsController,
  getPlantByIdController,
  uploadImageMiddleware,
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

export default router;
