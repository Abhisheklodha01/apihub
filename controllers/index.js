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
  getRandomRestaurantController
} from "./restaurantsControllers/restaurants.js";

import {
  getFoodNutritionByIdController,
  getFoodNutritionController,
  addFoodNutritionController,
  getRandomFoodNutritionController,
} from "./foodNutritionControllers/foodNutrition.js";

import {
  addHotelsController,
  getHotelByIdController,
  getHotelsController,
  getHotelsByCityController,
  getRandomHotelController
} from "./hotelControllers/hotel.js";

import {
  addProgrammingLanguageController,
  getProgrammingLanguageByIdController,
  getProgrammingLanguagesController,
  getRandomProgrammingLanguageController
} from "./programmingLanguagesControllers/programming.js";

import {
  addCountryController,
  getCountriesController,
  getCountryByIdController,
  getRandomCountryController
} from "./countryControllers/country.js";

import {
  addFlowersController,
  getAllFlowersController,
  getFlowerByIdController,
  getRandomFlowerController
} from "./flowersControllers/flowers.js";

import {
  addCarsController,
  getAllCarsController,
  getCarByIdController,
  getRandomCarController
} from "./carsControllers/cars.js";

import {
  addPlantsController,
  getAllPlantsController,
  getPlantByIdController,
  getRandomPlantController
} from "./plantsControllers/plants.js";
import {
  addArticleController,
  getArticleByIdController,
  getArticlesController,
  getRandomArticleController,
} from "./articlesControllers/articles.js";

import {
  addProductController,
  getProductsController,
  getProductByIdController,
  getRandomProductController,
} from "./productsControllers/products.js";

import { getDBDataDetails } from "./admin/dataDetails.js";

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
  getFoodNutritionByIdController,
  getFoodNutritionController,
  addFoodNutritionController,
  getRandomFoodNutritionController,
  addHotelsController,
  getHotelByIdController,
  getHotelsController,
  getHotelsByCityController,
  addProgrammingLanguageController,
  getProgrammingLanguageByIdController,
  getProgrammingLanguagesController,
  addCountryController,
  getCountriesController,
  getCountryByIdController,
  addFlowersController,
  getAllFlowersController,
  getFlowerByIdController,
  addCarsController,
  getAllCarsController,
  getCarByIdController,
  addPlantsController,
  getAllPlantsController,
  getPlantByIdController,
  addArticleController,
  getArticleByIdController,
  getArticlesController,
  getRandomArticleController,
  addProductController,
  getProductsController,
  getProductByIdController,
  getRandomProductController,
  getRandomCarController,
  getRandomCountryController,
  getRandomFlowerController,
  getRandomHotelController,
  getRandomPlantController,
  getRandomProgrammingLanguageController,
  getRandomRestaurantController,
  getDBDataDetails
};
