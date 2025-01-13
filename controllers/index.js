import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController
} from "./userControllers/user.js";

import { User } from "../models/index.js";
import {sendVerificationcode} from '../email/index.js'

export {
    verifyOtp,
    resendVerificationCode,
    registerUserController,
    sendVerificationcode,
    signInUserController,
    forgotPasswordController,
    User
}