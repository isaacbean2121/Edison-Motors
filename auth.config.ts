// this will add edge compatibility bc we are using prisma
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Credentials({
        async authorize(credentials) {
            // validate fields again
            const validatedFields = LoginSchema.safeParse(credentials);
            // if fields are validated successfully, destructure them
            if (validatedFields.success) {
                const { email, password } = validatedFields.data;

                const user = await getUserByEmail(email);
                if (!user || !user.password) return null;
                
                // compared entered password with hashed password from db (security measure)
                const passwordsMatch = await bcrypt.compare(password, user.password);

                if (passwordsMatch) return user;
            }
            return null;
        }
    })
  ],
} satisfies NextAuthConfig;
