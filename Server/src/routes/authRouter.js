import { Router } from "express";

const router = Router();

// endpoint /api/v1/auth/
router.get("/register", (req, res) => {
  res.send({ tes: "Hello World" });
});

router.get("/login", (req, res) => {
  res.send({ tes: "Hello Login" });
});

export default router;
