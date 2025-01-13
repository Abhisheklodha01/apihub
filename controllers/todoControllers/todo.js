import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addTodo = async (req, res) => {
  try {
    const { name, description } = await req.body;
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "Name and description are required",
      });
    }
    const todo = await prisma.todo.create({
      data: {
        name,
        description,
      },
    });
    return res.status(201).json({
      success: true,
      message: "Todo created",
      todo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create todo",
    });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error Failed to fetched todos",
    });
  }
};

export const getTodoById = async (req, res) => {
  const { todoId } = req.body;
  try {
    const todo = await prisma.todo.findUnique({
      where: {
        id: Number(todoId),
      },
    });

    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "Todo does not exists with this id",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo fetched successfully",
      todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error failed to fetched todo",
    });
  }
};
