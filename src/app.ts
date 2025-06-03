import express, { Request, Response } from "express";
import postRoutes from "./routes/post.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.get("/test", (req: Request, res: Response) => {
  res.end("REQUEST RECEIVED SUCCESSFULLY");
});

app.use("/api/v1/posts", postRoutes);

app.use(errorHandler);

export { app };
