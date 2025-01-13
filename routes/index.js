import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  todo,
  getTodo
} from "../controllers/index.js";
import userRouter from './userRoutes/user.route.js'
import todoRouter from './todoRoutes/todo.route.js'
export {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  userRouter,
  todo,
  todoRouter,
  getTodo
}