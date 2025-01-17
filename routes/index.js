import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
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
  getDogsController,
  getDogByIdController,
  addvideoController,
  getVideosController,
  getVideoByIdController,
  getCatByIdController,
  uploadYoutubeVideoController,
  getYoutubeVideoByIdController,
  getYoutubeVideosController,
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
  getQuoteByIdController,
  getQuotesController,
  getRandomBookController,
  getRandomCatController,
  getRandomDogController,
  getRandomImageController,
  getRandomJokeController,
  getRandomMovieController,
  getRandomQuoteController,
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
} from "../controllers/index.js";

import { uploadImageMiddleware } from "../middlewares/cloudinary.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { uploadVideoMiddleware, upload } from "../middlewares/imageKit.js";

export {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  addTodoController,
  getTodosController,
  getTodoByIdController,
  getUserProfileController,
  uploadImageController,
  uploadImageMiddleware,
  getImageByIdController,
  getImagesController,
  isAuthenticated,
  uploadCatController,
  getAllCatsController,
  addDogsController,
  getDogsController,
  getDogByIdController,
  uploadVideoMiddleware,
  upload,
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
  getQuoteByIdController,
  getQuotesController,
  getRandomBookController,
  getRandomCatController,
  getRandomDogController,
  getRandomImageController,
  getRandomJokeController,
  getRandomMovieController,
  getRandomQuoteController,
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
};

import userRouter from "./userRoutes/user.route.js";
import todoRouter from "./todoRoutes/todo.route.js";
import imageRouter from "./imageRoutes/image.route.js";
import catRouter from "./catRouters/cat.route.js";
import dogRouter from "./dogRoutes/dog.route.js";
import reelsRouter from "./reelsRoutes/reels.route.js";
import youtubeVideoRouter from "./youtubeVideoRoutes/youtube.route.js";
import booksRouter from "./booksRoutes/books.route.js";
import moviesRouter from "./moviesRoutes/movies.route.js";
import jokesRouter from "./jokesRoutes/jokes.route.js";
import quotesRouter from "./quotesRoutes/quotes.route.js";
import restaurantsRouter from "./restaurantsRoutes/restaurants.route.js";
import foodNutritionsRouter from "./foodNutritionRoutes/foodNutrition.route.js";
import hotelsRouter from "./hotelRoutes/hotels.route.js";
import programmingLanguagesRouter from "./pragrammingLanguagesRoutes/programming.route.js";
import countriesRouter from "./countryRoutes/contries.route.js";
import flowersRouter from "./flowerRoutes/flower.route.js";
import carRouter from "./carRoutes/car.route.js";
import plantsRouter from "./plantsRoutes/plant.route.js";
import articlesRouter from "./articleRoutes/article.route.js";
import productsRouter from "./productsRoutes/products.route.js";
export {
  userRouter,
  todoRouter,
  imageRouter,
  catRouter,
  dogRouter,
  reelsRouter,
  youtubeVideoRouter,
  booksRouter,
  moviesRouter,
  jokesRouter,
  quotesRouter,
  restaurantsRouter,
  foodNutritionsRouter,
  hotelsRouter,
  programmingLanguagesRouter,
  countriesRouter,
  flowersRouter,
  carRouter,
  plantsRouter,
  articlesRouter,
  productsRouter,
};
