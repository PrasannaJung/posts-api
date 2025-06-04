import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Post } from "../models/post.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

const getAllPosts = asyncHandler(async (req: Request, res: Response) => {
  const allPosts = await Post.find({}).populate("author", "_id username");
  res
    .status(200)
    .json(new ApiResponse(200, "Posts retrieved successfully", allPosts));
});

const createPost = asyncHandler(async (req: Request, res: Response) => {
  console.log("The incoming request headers are ", req.headers);
  const { content } = req.body;
  const authorId = req.user?.id;
  if (!content)
    throw new ApiError(400, "Please provide some content for the post");
  const newPost = new Post({
    content,
    author: authorId,
  });

  await newPost.save();
  res.status(201).json(new ApiResponse(201, "Post created successfully", null));
});

export { getAllPosts, createPost };
