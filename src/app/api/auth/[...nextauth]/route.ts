import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongoclient";
import User from "@/models/Users";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // Credentials Login (Email & Password)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter both email and password.");
        }

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("Invalid email or password.");
        }

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isMatch) {
          throw new Error("Invalid email or password.");
        }

        const userObj = user.toObject();
        userObj.id = user._id.toString();

        return userObj;
      },
    }),

    // OAuth Providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log(
        "JWT Callback - Token:",
        token,
        "User:",
        user,
        "Account:",
        account
      );
      if (user) {
        token.id = user.id || token.sub; // Ensure the correct user ID is set
        token.email = user.email;
        token.name = user.name;
        token.provider = account ? account.provider : "credentials";
      }
      console.log("✅ Token after update:", token);
      return token;
    },
    async session({ session, token }) {
      console.log(session, token, "session value");
      if (session.user) {
        session.user.id = (token.id as string) || (token.sub as string);
        session.user.provider = token.provider as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
