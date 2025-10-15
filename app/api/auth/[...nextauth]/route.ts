import NextAuth, { type NextAuthOptions, type Session, type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma"; // <-- IMPORTING YOUR PRISMA CLIENT

// Extend NextAuth Session type to include user.id
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
    };
  }

  // Optionally extend the User model if you use it elsewhere
  interface User {
    id: string;
  }
}

// This is the core of your NextAuth configuration.
// It tells NextAuth how to handle authentication.

export const authOptions: NextAuthOptions = {
  // TEMPORARILY DISABLED: Use the Prisma Adapter - will enable after schema is synced
  // adapter: PrismaAdapter(prisma),
  
  // Secret for JWT encryption - REQUIRED
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-please-change-in-production",
  
  // Configure one or more authentication providers.
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile"
        }
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      }
    }),
    GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID || "",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    })
  ],
  
  // Use JWT session strategy for better compatibility
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // Custom pages
  pages: {
    signIn: '/login',
    error: '/login',
  },

  // Enable debug mode in development
  debug: true,

  // Callbacks
  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log("[JWT Callback] Triggered");
      if (user) {
        console.log("[JWT Callback] User:", user);
        token.id = user.id;
      }
      if (account) {
        console.log("[JWT Callback] Account:", account.provider);
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("[Session Callback] Triggered");
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("====================================");
      console.log("[SignIn Callback] Triggered");
      console.log("[SignIn Callback] Provider:", account?.provider);
      console.log("[SignIn Callback] User email:", user?.email);
      console.log("[SignIn Callback] Account:", account);
      console.log("====================================");
      
      // Check if all required data is present
      if (!user.email) {
        console.error("[SignIn Callback] ERROR: No email provided");
        return false;
      }
      
      try {
        // Allow sign in
        console.log("[SignIn Callback] SUCCESS: Allowing sign in");
        return true;
      } catch (error) {
        console.error("[SignIn Callback] ERROR:", error);
        return false;
      }
    },
  },
  
  // Events for logging
  events: {
    async signIn({ user, account, profile }) {
      console.log("User signed in:", user.email);
    },
    async signOut({ session, token }) {
      console.log("User signed out");
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
