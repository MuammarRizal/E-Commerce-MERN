import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";

const router = Router();

// endpoint /api/v1/auth/
router.post("/register", registerUser);

router.get("/login", (req, res) => {
  res.send({ tes: "Hello Login" });
});

export default router;
