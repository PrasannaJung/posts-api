import { Router } from "express";
import { createPost } from "../controllers/post.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.post("/create/:postId", isAuthenticated, createPost);

export { router };
