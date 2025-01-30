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
    const verifyExistedUser = exitsedUser ? exitsedUser._id : undefined;
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
    const auth_token = jwt.sign({ id: user._id }, JWT_SECRET_KEY);
    return res.status(201).json({
      success: true,
      message: "Successfully register to ApiHub",
      user,
      auth_token,
    });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({
      success: false,
      message: "Server issue please try again after some time",
      error,
    });
  }
};

export const verifyOtp = async (req, res) => {
  const { verificationCode, email } = req.body;
  console.log(email);
  try {
    const user = await User.findOne({ email});
    console.log(user);
    if (verificationCode != user.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid Otp",
      });
    }
    user.isVerified = true;
    await user.save();
    return res.status(201).json({
      success: true,
      message: "Email verified successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({
      success: false,
      message: "server error unable to verify otp",
      error,
    });
  }
};

export const resendVerificationCode = async (req, res) => {
  const { email } = req.body;
  try {
    const otp = generateOTP(6);
    const user = await User.findOne({ email: email });
    user.otp = otp;
    await user.save();
    await sendVerificationcode(email, otp);
    return res.status(201).json({
      success: true,
      message: "Verification Code Send Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Serever error unable to send Verification Code",
    });
  }
};

export const signInUserController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const exitsedUser = await User.find({ email: email });
    if (!exitsedUser) {
      return res.status(400).json({
        success: false,
        message: "Email does not exists please register first",
      });
    }
    const isPasswordValid = await bcryptjs.compare(
      password,
      exitsedUser.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }
    const auth_token = jwt.sign({ id: exitsedUser._id }, JWT_SECRET_KEY);
    return res.status(201).json({
      success: true,
      message: "Successfully Signin to ApiHub",
      user: exitsedUser,
      auth_token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server issue please try again after some time",
      error,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email does not exists please register first",
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 20);
    user.password = hashedPassword;
    await user.save();
    return res.status(201).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server issue please try again after some time",
      error,
    });
  }
};

export const getUserProfileController = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User details find successfully",
    user: req.user
  })
};
