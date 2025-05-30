import express from "express";
import {
  addBookController,
  getBooksController,
  getBookByIdController,
  uploadImageMiddleware,
  getRandomBookController
} from "../index.js";

const router = express.Router();

router.post(
  "/upload-book",
  uploadImageMiddleware.upload,
  uploadImageMiddleware.cloudinaryUpload,
  addBookController
);

router.get("/get-books", getBooksController);
router.get("/get-books/:bookId", getBookByIdController);
router.get("/random", getRandomBookController)

export default router;
