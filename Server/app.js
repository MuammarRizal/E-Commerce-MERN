import express from "express";
import router from "./src/routes/authRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 4000;

// endpoint
app.use("/api/v1/auth", router);

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
