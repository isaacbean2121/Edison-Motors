// reusable zod form schemas for all forms to aid with validation

import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required" // custom error message
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }), // dont specify a minimum length on login because people may have registered when rules were different, instead specify min of 1
    code: z.optional(z.string()), // optional two-factor code
});

export const NewPasswordSchema = z.object({
    password: z.string().min(8, { // 8 char password min requirement
        message: "Minimum of 8 characters required" // custom error message
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required" // custom error message
    }),
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required" // custom error message
    }),

    password: z.string().min(8, {
        message: "Minimum of 8 characters required" // specify a minimum password length on register
    }), 
    
    name: z.string().min(1, {
        message: "Name is required"
    }),
});
