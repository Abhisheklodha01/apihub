import express from 'express'
import { getTodos, addTodo, getTodoById } from '../index.js'

const router = express.Router()

router.post("/add-todo", addTodo)
router.get('/get-todo', getTodos)
router.get("/get-todo/:todoId", getTodoById)


export default router