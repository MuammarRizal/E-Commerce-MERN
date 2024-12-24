import express from "express";
import router from "./routes/authRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
dotenv.config();
const app = express();
const PORT = 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parent router
app.use("/api/v1/auth", router);

app.use(notFound);
app.use(errorHandler);

// server
app.listen(PORT, () => console.log(`Server Runinng on port : ${PORT}`));

// Connection DB
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("Database Connect");
  })
  .catch(() => {
    console.log("Database is not connection");
  });
