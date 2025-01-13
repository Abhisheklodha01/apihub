import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  addTodo,
  getTodos
} from "../controllers/index.js";
import userRouter from './userRoutes/user.route.js'
import todoRouter from './todoRoutes/todo.route.js'
export {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  userRouter,
  addTodo,
  todoRouter,
  getTodos
}