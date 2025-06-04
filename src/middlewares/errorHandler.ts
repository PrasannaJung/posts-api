import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

interface CustomErrorHandler extends Error {
  success: boolean;
  statusCode: number;
}

const errorHandler: ErrorRequestHandler = (
  error: CustomErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorMessage =
    error.message.trim() === "" ? "Something went wrong" : error.message;
  const statusCode = error.statusCode || 500;

  res
    .status(statusCode)
    .json({ success: error.success, statusCode, message: errorMessage });
};

export { errorHandler };
