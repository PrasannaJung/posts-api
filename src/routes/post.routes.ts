import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/post.controller";

const router = Router();

router.route("/").get(getAllPosts).post(createPost);

export default router;
