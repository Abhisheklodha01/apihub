import express from "express";
import {
 addMoviesController,
 getMoviesController,
 getMovieByIdController,
 uploadImageMiddleware,
} from "../index.js";

const router = express.Router();

router.post(
  "/add-movie",
  uploadImageMiddleware.upload,
  uploadImageMiddleware.cloudinaryUpload,
 addMoviesController
);

router.get("/get-movies", getMoviesController);
router.get("/get-movies/:movieId", getMovieByIdController);

export default router;
