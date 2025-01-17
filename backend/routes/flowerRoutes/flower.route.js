import express from "express";
import {
  addFlowersController,
  getAllFlowersController,
  getFlowerByIdController,
  uploadImageMiddleware,
} from "../index.js";

const router = express.Router();

router.post(
  "/add-flower",
  uploadImageMiddleware.upload,
  uploadImageMiddleware.cloudinaryUpload,
  addFlowersController
);
router.get("/get-flowers", getAllFlowersController);
router.get("/get-flower/:flowerId", getFlowerByIdController);

export default router;
