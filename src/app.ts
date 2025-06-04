import express, { Request, Response } from "express";
import postRoutes from "./routes/post.routes";
import { router as userRoutes } from "./routes/user.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.end("REQUEST RECEIVED SUCCESSFULLY");
});

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/users", userRoutes);

app.use(errorHandler);

export { app };
