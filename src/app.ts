import express, { Request, Response } from "express";

const app = express();

app.get("/test", (req: Request, res: Response) => {
  res.end("REQUEST RECEIVED SUCCESSFULLY");
});

export { app };
