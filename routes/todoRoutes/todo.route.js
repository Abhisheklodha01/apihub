import express from "express";
import {
  getTodosController,
  addTodoController,
  getTodoByIdController,
  getRandomTodoController
} from "../index.js";

const router = express.Router();

router.post("/add-todo", addTodoController);
router.get("/get-todo", getTodosController);
router.get("/get-todo/:todoId", getTodoByIdController);
router.get("random", getRandomTodoController)

export default router;
