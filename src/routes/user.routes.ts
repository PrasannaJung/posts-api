import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller";

const router = Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

export { router };
