import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Enter Your full name")
      .max(50,"Enter your full name"),
    
    email: z
      .string()
      .email("Invalid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
        "Password must contain uppercase, lowercase and number"
      ),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );