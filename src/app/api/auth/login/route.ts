import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/Users";
import { connectToDatabase } from "@/lib/mongodb";
import { generateToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = generateToken(user);

    const response = NextResponse.json({
      user: { name: user.name, email: user.email },
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
