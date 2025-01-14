import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  getUserProfileController,
} from "./userControllers/user.js";

import { User } from "../models/index.js";
import { sendVerificationcode } from "../email/index.js";
import {
  addTodoController,
  getTodosController,
  getTodoByIdController,
} from "./todoControllers/todo.js";
import {
  uploadImageController,
  getImagesController,
  getImageByIdController,
} from "./imageControllers/image.js";

import {
  uploadCatController,
  getAllCatsController,
  getCatByIdController
} from "./catControllers/cat.js";

import {
  addDogsController,
  getDogByIdController,
  getDogsController,
} from "./dogControllers/dog.js";

import {
  addvideoController,
  getVideosController,
  getVideoByIdController,
} from "./instaReels/reels.js";

export {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  sendVerificationcode,
  signInUserController,
  forgotPasswordController,
  User,
  addTodoController,
  getTodosController,
  getTodoByIdController,
  getUserProfileController,
  uploadImageController,
  getImageByIdController,
  getImagesController,
  uploadCatController,
  getAllCatsController,
  addDogsController,
  getDogByIdController,
  getDogsController,
  addvideoController,
  getVideosController,
  getVideoByIdController,
  getCatByIdController
};
