import express from "express";
import {
 addMoviesController,
 getMoviesController,
 getMovieByIdController,
 uploadImageMiddleware,
 getRandomMovieController
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
router.get("/random", getRandomMovieController)

export default router;
