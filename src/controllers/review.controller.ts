import { Request, Response, NextFunction } from "express";
import { Review } from "../models/review.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { Post } from "../models/post.model";
import { ApiResponse } from "../utils/ApiResponse";

const createReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { content } = req.body;
    const postId = req.params.postId;

    if (!postId) {
      throw new ApiError(400, "Post id must be provided");
    }

    const post = await Post.findById(postId);

    if (!post) {
      throw new ApiError(400, "Post with the given ID does not exist");
    }

    const userId = req.user?.id;

    const newReview = new Review({
      content,
      author: userId,
      post: postId,
    });

    await newReview.save();

    res
      .status(201)
      .json(new ApiResponse(201, "Review created successfully", null));
  }
);

export { createReview };
