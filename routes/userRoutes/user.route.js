import express from "express";
import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  getUserProfileController,
  isAuthenticated,
} from "../index.js";

const router = express.Router();

router.post("/resend-otp", resendVerificationCode);
router.post("/verify-otp", verifyOtp);
router.post("/register", registerUserController);
router.post("/signin", signInUserController);
router.post("/forgot-password", forgotPasswordController);
router.get("/getuserprofile", isAuthenticated, getUserProfileController);

export default router;
