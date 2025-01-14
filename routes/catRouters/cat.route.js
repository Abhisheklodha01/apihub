import express from 'express';
import { getAllCatsController, uploadCatController } from '../index.js';


const router = express.Router();


router.get('/get-cat',getAllCatsController)
router.post('/add-cat',uploadCatController)


export default router