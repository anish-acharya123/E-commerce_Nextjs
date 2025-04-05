import mongoose from "mongoose";
const Mongodb_url = process.env.MONGODB_URL as string;

if (!Mongodb_url) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local"
  );
}


let cached = (globalThis as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(Mongodb_url)
      .then((mongoose) => mongoose)
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        throw new Error(
          "MongoDB connection failed. Please check if MongoDB is running."
        );
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
