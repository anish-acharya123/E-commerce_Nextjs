import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

interface User {
  _id: string;
  email: string;
}

export function generateToken(user: User) {
  return jwt.sign(
    { id: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1d" } // Token valid for 1    day
  );
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error: unknown) {
    throw new Error("Invalid or expired token");
  }
}
