import express from "express";
import {
  addProductController,
  getProductByIdController,
  getProductsController,
  getRandomProductController,
} from "../index.js";

const router = express.Router();

router.get("/get-products", getProductsController);
router.get("/get-product/:id", getProductByIdController);
router.get("/get-random-product", getRandomProductController);
router.post("/add-product", addProductController);

export default router;
