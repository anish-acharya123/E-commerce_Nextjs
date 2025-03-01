import mongoose from "mongoose";
const Mongodb_url = process.env.MONGODB_URL as string;

if (!Mongodb_url) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local"
  );
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(Mongodb_url, {
        dbName: "ecommerce",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
