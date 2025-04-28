import express from "express";
import {
  getYoutubeVideoByIdController,
  getYoutubeVideosController,
  uploadYoutubeVideoController,
  getRandomYoutubeVideoController,
} from "../index.js";

const router = express.Router();

router.get("/get-youtube-videos", getYoutubeVideosController);
router.post("/upload-video", uploadYoutubeVideoController);
router.get("/get-youtube-video:id", getYoutubeVideoByIdController);
router.get("/random", getRandomYoutubeVideoController)

export default router;
