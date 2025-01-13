import express from 'express'
import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
} from "../index.js";

const router = express.Router()

router.post("/resend-otp", resendVerificationCode)
router.post("/verify-otp", verifyOtp)
router.post("/register", registerUserController)


export default router