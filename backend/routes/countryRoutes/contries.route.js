import express from 'express';
import {
  addCountryController,
  getCountriesController,
  getCountryByIdController,
} from "../index.js"

const router = express.Router();

router.post("/add-country", addCountryController);
router.get("/get-countries", getCountriesController);
router.get("/get-country/:id", getCountryByIdController);

export default router