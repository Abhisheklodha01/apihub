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
  getImagesController
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
};

import userRouter from "./userRoutes/user.route.js";
import todoRouter from "./todoRoutes/todo.route.js";
import imageRouter from './imageRoutes/image.js'

export {
  userRouter,
  todoRouter,
  imageRouter,
}
