import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      provider: string;
    } & DefaultSession["user"]; // Extends default session.user
  }

  interface JWT {
    id: string;
    provider: string;
  }
}
