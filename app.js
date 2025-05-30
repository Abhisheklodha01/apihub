import express from "express";
import cors from "cors";
import connectWithMongoDB from "./db/index.js";
import dotenv from 'dotenv'
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
  countriesRouter,
  flowersRouter,
  carRouter,
  plantsRouter,
  articlesRouter,
  productsRouter,
  adminRouter
} from "./routes/index.js";

const FRONTEND_URL = process.env.FRONTEND_URL

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (origin === FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(null, {
        origin: true,
        methods: ["GET"],
      });
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: corsOptions, credentials: true }));

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
app.use("/api/v1/flowers", flowersRouter);
app.use("/api/v1/cars", carRouter);
app.use("/api/v1/plants", plantsRouter);
app.use("/api/v1/articles", articlesRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/admin", adminRouter)

export default app;
