import { Request, Response, NextFunction } from "express";

const POSTS_DATA = [
  {
    id: 1,
    content: "HELLO",
    author: {
      username: "Prasanna",
    },
  },
  {
    id: 2,
    content: "WORLD",
    author: {
      username: "Sakshyam",
    },
  },
];

const getAllPosts = (req: Request, res: Response) => {
  res.status(200).json(POSTS_DATA);
};

const createPost = (req: Request, res: Response) => {};

export { getAllPosts };
