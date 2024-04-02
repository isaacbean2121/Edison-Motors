import NextAuth from "next-auth"
import { UserRole } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation"


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      // future proofing: allow OAuth without email verification
      if (account?.provider !== "credentials") return true;
      
      // type assertion to prevent type error in next line of code
      const userId = user.id as string;

      const existingUser = await getUserById(userId);

      // prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;
      
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