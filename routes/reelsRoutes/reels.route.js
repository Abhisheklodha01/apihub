import express from "express";
import {
  addvideoController,
  getVideoByIdController,
  getVideosController,
} from "../index.js";
import { upload, uploadVideoMiddleware } from "../index.js";

const router = express.Router();

router.post(
  "/add-reel",
  upload.single("video"),
  uploadVideoMiddleware,
  addvideoController
);
router.get("/get-reels", getVideosController);
router.get("/get-reels/:videoId", getVideoByIdController);

export default router