import express from "express";
import { uploadImageController, uploadImageMiddleware } from "../index.js";

const router = express.Router();

router.post(
  "/upload-image",
  uploadImageMiddleware.upload,
  uploadImageMiddleware.cloudinaryUpload,
  uploadImageController
);

export default router
