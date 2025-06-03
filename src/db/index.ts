import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/posts_api";

const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_URI);
    console.log(`DB CONNECTED TO ${db.connection.host}`);
  } catch (e) {
    console.log("MONGODB connection failed", e);
    process.exit(1);
  }
};

export { connectDb };
