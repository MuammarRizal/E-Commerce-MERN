import { Router } from "express";
import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();

// endpoint /api/v1/auth/
router.get(
  "/register",
  asyncHandler(async (req, res) => {
    await User.create({
      name: req.body.name,
    });
  })
);

router.get("/login", (req, res) => {
  res.send({ tes: "Hello Login" });
});

export default router;
