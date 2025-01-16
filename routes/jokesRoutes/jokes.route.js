import express from 'express';
import { getJokesController,getJokeByIdController,addJokeController } from '../index.js';


const router = express.Router()



router.get('/get-jokes',getJokesController)
router.get('/get-joke/:id',getJokeByIdController)
router.post('/add-joke',addJokeController)

export default router