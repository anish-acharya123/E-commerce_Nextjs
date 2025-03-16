import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String, // Only for manual login users
    },
    provider: {
      type: String,
      enum: ["credentials", "google", "facebook"],
      required: true,
    },
    image: {
      type: String, // Store user profile images (for OAuth users)
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
