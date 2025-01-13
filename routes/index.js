import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  addTodo,
  getTodos,
  getTodoById,
  getUserProfile,
  uploadImageController,
} from "../controllers/index.js";
import userRouter from "./userRoutes/user.route.js";
import todoRouter from "./todoRoutes/todo.route.js";
import { uploadImageMiddleware } from "../middlewares/cloudinary.js";
import imageRouter from './imageRoutes/image.js'
export {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  userRouter,
  addTodo,
  todoRouter,
  getTodos,
  getTodoById,
  getUserProfile,
  uploadImageController,
  uploadImageMiddleware,
  imageRouter
};
