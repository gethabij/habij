import { z } from "zod";

export const LoginSchema = z.object({
    email: z
        .string()
        .email('Invalid email format')
        .min(3, 'Email is required and must be at least 3 characters long'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .refine((value) => /[A-Z]/.test(value), 'Password must include at least one uppercase letter')
        .refine((value) => /[a-z]/.test(value), 'Password must include at least one lowercase letter')
        .refine((value) => /\d/.test(value), 'Password must include at least one digit')
        .refine((value) => /[^a-zA-Z0-9]/.test(value), 'Password must include at least one special character'),
});

export type LoginModel = z.infer<typeof LoginSchema>;