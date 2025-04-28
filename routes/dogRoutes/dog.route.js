import express from 'express'
import {
  addDogsController,
  getDogsController,
  getDogByIdController,
  getRandomDogController
} from "../index.js";

const router = express.Router()

router.post("/add-dogs", addDogsController)
router.get("/get-dogs", getDogsController)
router.get("/get-dogs/:dogId", getDogByIdController)
router.get("/random", getRandomDogController)

export default router