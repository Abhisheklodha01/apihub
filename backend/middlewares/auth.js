import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { User } from "../models/index.js";

config();

export const isAuthenticated = async (req, res, next) => {
  const token = req.headers["authorization"]?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized request",
    });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    if (!decodedToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
    const user = await User.findById(decodedToken._id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error unable to verify user",
    });
  }
};
