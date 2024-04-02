"use server";
import * as z from "zod"
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    token?: string | null,
) => {
    if (!token) {
        return { error: "Missing token!" };
    }

    // validate fields
    const validatedFields = NewPasswordSchema.safeParse(values);

    // if validation unsuccessful, return error
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    // extract password from validated fields if validation is successful
    const { password } = validatedFields.data;

    // token validation
    const existingToken = await getPasswordResetTokenByToken(token);

    // if token does not exist, return error
    if (!existingToken) {
        return { error: "Invalid token!" };
    }

    // check token expiration
    const hasExpired = new Date(existingToken.expires) < new Date();

    // if token has expired, return error
    if (hasExpired) {
        return { error: "Token has expired!" };
    }

    // check that the user matches the exiting user that we are trying to reset password for
    const existingUser = await getUserByEmail(existingToken.email);

    // if user does not exist, return error
    if (!existingUser) {
        return { error: "Email does not exist!" };
    }

    // hash new password and update db

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            password: hashedPassword
        }
    });

    // delete password reset token
    await db.passwordResetToken.delete({
        where: { id: existingToken.id }
    });

    return { success: "Password reset!" };
};