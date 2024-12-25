import express from "express";
import router from "./routes/auth.router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";
dotenv.config();
const app = express();
const PORT = 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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
