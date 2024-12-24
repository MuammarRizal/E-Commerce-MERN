import express from "express";
import router from "./src/routes/authRouter.js";

const app = express();
const PORT = 4000;

// endpoint
app.use("/api/v1/auth", router);

// server
app.listen(PORT, () => console.log(`Server Runinng on port : ${PORT}`));
