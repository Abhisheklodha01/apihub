import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { config } from "dotenv";
import { User, sendVerificationcode } from "../index.js";

config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const ACCESSTOKEN = process.env.ACCESS_TOKEN;

function generateOTP(lenght) {
  let otp = "";
  for (let index = 0; index < lenght; index++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
}

export const registerUserController = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  try {
    if (!email || !name || !password || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const exitsedUser = await User.find({ email: email });
    const verifyExistedUser = exitsedUser ? exitsedUser._id : undefined
    if (verifyExistedUser != undefined) {
      return res.status(400).json({
        success: false,
        message: "Email already exists please try login",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const accessToken = jwt.sign(ACCESSTOKEN, JWT_SECRET_KEY);
    const otp = generateOTP(6);
    await sendVerificationcode(email, otp);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      accessToken,
      otp,
    });

    return res.status(201).json({
      success: true,
      message: "Successfully register to ApiHub",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server issue please try again after some time",
      error,
    });
  }
};

export const verifyOtp = async (req, res) => {
  const { verificationCode, id } = req.body;
  try {
    const user = await User.findById(id);
    if (verificationCode != user.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid Otp",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(id, {
      isVerified: true,
    });

    return res.status(201).json({
      success: true,
      message: "Email verified successfully",
      user: updatedUser
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error unable to verify otp",
      error
    });
  }
};

export const resendVerificationCode = async (req, res) => {
  const { email, id } = req.body;
  try {
    const otp = generateOTP(6);
    await User.findByIdAndUpdate(id, {
      otp: otp,
    });

    await sendVerificationcode(email, otp);
    return res.status(201).json({
      success: true,
      message: "Verification Code Send Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Serever error unable to send Verification Code",
    });
  }
};
