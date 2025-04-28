import express from "express";
import {
  getImageByIdController,
  getImagesController,
  uploadImageController,
  uploadImageMiddleware,
  getRandomImageController
} from "../index.js";

const router = express.Router();

router.post(
  "/upload-image",
  uploadImageMiddleware.upload,
  uploadImageMiddleware.cloudinaryUpload,
  uploadImageController
);

router.get("/get-images", getImagesController);
router.get("/get-images/:imageId", getImageByIdController);
router.get("/random", getRandomImageController)

export default router;
