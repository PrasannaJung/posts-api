import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controllers/user.controller";

interface DecodedTokenPayload {
  id: string;
  username: string;
  iat: number;
  exp: number;
}

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new ApiError(401, "Authorization token missing");
  }

  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("THE TOKEN IS", token);
    const decoded = jwt.verify(
      token as string,
      JWT_SECRET
    ) as DecodedTokenPayload;
    req.user = decoded;
    next();
  } catch (err) {
    console.log("Error occurred in jwt authentication", err);
  }
};

export { isAuthenticated };
