import express from "express";
import {
  getTodosController,
  addTodoController,
  getTodoByIdController,
} from "../index.js";

const router = express.Router();

router.post("/add-todo", addTodoController);
router.get("/get-todo", getTodosController);
router.get("/get-todo/:todoId", getTodoByIdController);

export default router;
