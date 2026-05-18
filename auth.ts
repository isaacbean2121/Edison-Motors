import NextAuth from "next-auth"
import { UserRole } from "@/lib/roles"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation"
import { isDevAuth } from "@/lib/dev"


export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  trustHost: true,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    
    async signIn({ user, account }) {
      // future proofing: allow OAuth without email verification
      if (account?.provider !== "credentials") return true;
      
      // type assertion to prevent type error in next line of code
      const userId = user.id as string;

      const existingUser = await getUserById(userId);

      if (!existingUser?.emailVerified) {
        if (isDevAuth()) {
          await db.user.update({
            where: { id: userId },
            data: { emailVerified: new Date() },
          });
        } else {
          return false;
        }
      }
      
      // 2FA check
      if (existingUser?.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

        if (!twoFactorConfirmation) return false;

        // Delete two factor confirmation after successful sign in
        await db.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          },
        });
      }

      return true;
    },

    async session ({ session, token}) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      return session;
    },
    async jwt ({ token }) {
      if (!token.sub) return token;
      // if there is a token, we want to get the user by the token.sub
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      // if there is a user, we want to assign user role to the token
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt"},
    ...authConfig,
})