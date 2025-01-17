import express from 'express';
import {
  addRestaurantsController,
  getRestaurantByIdController,
  getRestaurantsController,
  getRestaurationsByCityController,
} from "../index.js";

const router = express.Router()

router.post('/add-restaurant', addRestaurantsController);
router.get('/get-restaurantsbycity', getRestaurationsByCityController)
router.get('/get-restaurant/:restaurantId', getRestaurantByIdController)
router.get('/get-restaurants', getRestaurantsController)

export default router