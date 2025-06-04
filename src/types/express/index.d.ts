import express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        username: string;
        id: string;
        iat: number;
        exp: number;
      };
    }
  }
}
