import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URL) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const uri = process.env.MONGODB_URL;
const options = {};

let client;
let clientPromise;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the connection is cached.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise as Promise<MongoClient>;
} else {
  // In production, it's best not to use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect() as Promise<MongoClient>;
}

export default clientPromise;
