import express from 'express'
import { getTodos, addTodo } from '../index.js'

const router = express.Router()

router.post("/add-todo", addTodo)
router.get('/get-todo', getTodos)


export default router