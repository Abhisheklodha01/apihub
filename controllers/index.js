import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
} from "./userControllers/user.js";

import { User } from "../models/index.js";
import {sendVerificationcode} from '../email/index.js'
import { todo,getTodo } from "./todoControllers/todo.js";

export {
    verifyOtp,
    resendVerificationCode,
    registerUserController,
    sendVerificationcode,
    User,
    todo,
    getTodo,
}