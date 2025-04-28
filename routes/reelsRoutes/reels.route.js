import express from "express";
import {
  addvideoController,
  getVideoByIdController,
  getVideosController,
  getRandomReelController
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
router.get("/random", getRandomReelController)

export default router