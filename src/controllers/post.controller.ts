import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Post } from "../models/post.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

const getAllPosts = asyncHandler(async (req: Request, res: Response) => {
  const allPosts = await Post.find({});
  res
    .status(200)
    .json(new ApiResponse(200, "Posts retrieved successfully", allPosts));
});

const createPost = asyncHandler(async (req: Request, res: Response) => {
  console.log("REQ HIT HERE");
  const { content } = req.body;
  if (!content)
    throw new ApiError(400, "Please provide some content for the post");
  const newPost = new Post({
    content,
  });

  await newPost.save();
  res.status(201).json(new ApiResponse(201, "Post created successfully", null));
});

export { getAllPosts, createPost };
