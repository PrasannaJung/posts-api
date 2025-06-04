import express, { Request, Response } from "express";
import postRoutes from "./routes/post.routes";
import { router as userRoutes } from "./routes/user.routes";
import { router as reviewRoutes } from "./routes/review.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/reviews", reviewRoutes);

app.use(errorHandler);

export { app };

// app.get("/test", (req: Request, res: Response) => {
//   res.end("REQUEST RECEIVED SUCCESSFULLY");
// });
