import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
} from "./userControllers/user.js";

import { User } from "../models/index.js";
import {sendVerificationcode} from '../email/index.js'

export {
    verifyOtp,
    resendVerificationCode,
    registerUserController,
    sendVerificationcode,
    User
}