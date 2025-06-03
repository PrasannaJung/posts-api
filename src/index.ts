import { app } from "./app";
import { connectDb } from "./db";

const PORT = process.env.PORT || 3000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("SERVER RUNNING ON PORT", 3000);
    });
  })
  .catch((err) => {
    console.log("ERROR IN SERVER", err);
  });
