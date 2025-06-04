import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/post.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.route("/").get(getAllPosts).post(isAuthenticated, createPost);

export default router;
