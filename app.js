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
  moviesRouter,
  jokesRouter,
  quotesRouter,
  restaurantsRouter,
  foodNutritionsRouter,
  hotelsRouter,
  programmingLanguagesRouter,
  countriesRouter
} from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectWithMongoDB();

app.get("/", (req, res) => {
  return res.send("Working fine");
});

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server health information is available",
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/images", imageRouter);
app.use("/api/v1/cats", catRouter);
app.use("/api/v1/dogs", dogRouter);
app.use("/api/v1/reels", reelsRouter);
app.use("/api/v1/youtube", youtubeVideoRouter);
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/jokes", jokesRouter);
app.use("/api/v1/quotes", quotesRouter);
app.use("/api/v1/restaurants", restaurantsRouter);
app.use("/api/v1/foodnutritions", foodNutritionsRouter);
app.use("/api/v1/hotels", hotelsRouter);
app.use("/api/v1/programming", programmingLanguagesRouter);
app.use("/api/v1/countries", countriesRouter);

export default app;
