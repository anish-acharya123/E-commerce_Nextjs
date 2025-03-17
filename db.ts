const mongoose = require("mongoose");
const Mongodb_url = process.env.MONGODB_URL;
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });
async function testMongoDB() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(Mongodb_url);
    console.log("✅ MongoDB is running and connected!");
    process.exit(0); // Exit successfully
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Exit with error
  }
}

testMongoDB();
