import express from "express";
import connectWithMongoDB from "./db/index.js";
import {
  todoRouter,
  userRouter,
  imageRouter,
  catRouter,
  dogRouter,
  reelsRouter,
  youtubeVideoRouter,
  booksRouter,
} from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectWithMongoDB();

app.get("/", (req, res) => {
  return res.send("Working fine");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/images", imageRouter);
app.use("/api/v1/cats", catRouter);
app.use("/api/v1/dogs", dogRouter);
app.use("/api/v1/reels", reelsRouter);
app.use("/api/v1/youtube", youtubeVideoRouter);
app.use("/api/v1/books", booksRouter);

export default app;
