import express from 'express'
import { todo,getTodo } from '../index.js'

const router = express.Router()

router.post("/add-todo", todo)
router.get('/get-todo', getTodo)


export default router