import { config } from "dotenv";

config();
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const isAdmin = async (req, res, next) => {
  const email = req.headers["x-admin-header"];
  if (!email) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized request",
    });
  }
  const isMatch = ADMIN_EMAIL === email;
  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized request",
    });
  }
  next();
};
