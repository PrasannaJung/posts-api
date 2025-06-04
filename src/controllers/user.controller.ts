import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";

export const JWT_SECRET = "PRASANNA_SECRET";

const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const userExists = await User.findOne({ username });

    if (userExists) {
      throw new ApiError(400, "User with the given username already exists");
    }

    const newUser = new User({
      username,
      password,
    });
    await newUser.save();
    res.status(201).json(new ApiResponse(201, "User created successfully"));
  }
);

const loginUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      throw new ApiError(400, "Username does not exist");
    }

    if (user?.password !== password) {
      throw new ApiError(400, "Password did not match");
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      JWT_SECRET,
      {
        expiresIn: "30m",
      }
    );

    res.status(200).json(
      new ApiResponse(200, "User logged in successfully", {
        token,
      })
    );
  }
);

export { registerUser, loginUser };
