import express from "express";
import connectWithMongoDB from "./db/index.js";
import { userRouter } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectWithMongoDB();

app.get("/", (req, res) => {
  return res.send("Working fine");
});

app.use("/api/v1/users", userRouter)

export default app;
