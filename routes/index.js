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
  getDogByIdController
} from "../controllers/index.js";
import { uploadImageMiddleware } from "../middlewares/cloudinary.js";
import {isAuthenticated} from '../middlewares/auth.js'

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
  getDogByIdController
};

import userRouter from "./userRoutes/user.route.js";
import todoRouter from "./todoRoutes/todo.route.js";
import imageRouter from './imageRoutes/image.route.js'
import catRouter from './catRouters/cat.route.js'
import dogRouter from './dogRoutes/dog.route.js'

export {
  userRouter,
  todoRouter,
  imageRouter,
  catRouter,
  dogRouter
}
