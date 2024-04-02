"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // server-side validation using zod bc client-side validation can be bypassed easily
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!"};
    }

    // destructure the validated fields, hash and salt the password
    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    // check if email is already in use
    const existingUser = await getUserByEmail(email);

    // if email is already in use, return an error
    if (existingUser) {
        return { error: "Email already in use!"};
    }

    // if email is unique, create a new user
    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword, // store ONLY hashed passwords
        }
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
        verificationToken.email, 
        verificationToken.token,
    );

    return { success: "Confirmation email sent!"};
};