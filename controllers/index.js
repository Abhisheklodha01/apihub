import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  getUserProfileController,
} from "./userControllers/user.js";

import { User } from "../models/index.js";
import { sendVerificationcode } from "../email/index.js";
import {
  addTodoController,
  getTodosController,
  getTodoByIdController,
  getRandomTodoController,
} from "./todoControllers/todo.js";
import {
  uploadImageController,
  getImagesController,
  getImageByIdController,
  getRandomImageController,
} from "./imageControllers/image.js";

import {
  uploadCatController,
  getAllCatsController,
  getCatByIdController,
  getRandomCatController,
} from "./catControllers/cat.js";

import {
  addDogsController,
  getDogByIdController,
  getDogsController,
  getRandomDogController,
} from "./dogControllers/dog.js";

import {
  addvideoController,
  getVideosController,
  getVideoByIdController,
  getRandomReelController,
} from "./instaReels/reels.js";

import {
  uploadYoutubeVideoController,
  getYoutubeVideosController,
  getYoutubeVideoByIdController,
  getRandomYoutubeVideoController,
} from "./youtubeControllers/youtubeVideo.js";

import {
  addBookController,
  getBooksController,
  getBookByIdController,
  getRandomBookController,
} from "./booksControllers/books.js";

import {
  addMoviesController,
  getMoviesController,
  getMovieByIdController,
  getRandomMovieController,
} from "./moviesControllers/movies.js";

import {
  addJokeController,
  getJokeByIdController,
  getJokesController,
  getRandomJokeController,
} from "./jokesControllers/jokes.js";

import {
  addQuotesController,
  getQuotesController,
  getQuoteByIdController,
  getRandomQuoteController,
} from "./quotesController/quotes.js";

import {
  addRestaurantsController,
  getRestaurantByIdController,
  getRestaurantsController,
  getRestaurationsByCityController,
} from "./restaurantsControllers/restaurants.js";
export {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  sendVerificationcode,
  signInUserController,
  forgotPasswordController,
  User,
  addTodoController,
  getTodosController,
  getTodoByIdController,
  getUserProfileController,
  uploadImageController,
  getImageByIdController,
  getImagesController,
  uploadCatController,
  getAllCatsController,
  addDogsController,
  getDogByIdController,
  getDogsController,
  addvideoController,
  getVideosController,
  getVideoByIdController,
  getCatByIdController,
  uploadYoutubeVideoController,
  getYoutubeVideosController,
  getYoutubeVideoByIdController,
  addBookController,
  getBooksController,
  getBookByIdController,
  addMoviesController,
  getMoviesController,
  getMovieByIdController,
  addJokeController,
  getJokeByIdController,
  getJokesController,
  addQuotesController,
  getQuotesController,
  getQuoteByIdController,
  getRandomQuoteController,
  getRandomBookController,
  getRandomCatController,
  getRandomDogController,
  getRandomImageController,
  getRandomJokeController,
  getRandomMovieController,
  getRandomReelController,
  getRandomTodoController,
  getRandomYoutubeVideoController,
  addRestaurantsController,
  getRestaurantByIdController,
  getRestaurantsController,
  getRestaurationsByCityController,
};
