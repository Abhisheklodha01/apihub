import express from "express";
import {
  addHotelsController,
  getHotelByIdController,
  getHotelsByCityController,
  getHotelsController,
  getRandomHotelController
} from "../index.js";

const router = express.Router();

router.post("/add-hotel", addHotelsController)
router.get("/get-hotel/:hotelId", getHotelByIdController)
router.get("/get-hotels-by-city", getHotelsByCityController)
router.get("/get-hotels", getHotelsController)
router.get("/random", getRandomHotelController)

export default router;