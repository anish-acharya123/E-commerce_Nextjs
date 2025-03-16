import { z } from "zod";

export const UserSignupSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Name should be atleast 3 characters",
      })
      .max(20, {
        message: "Name should be atmost 20 characters",
      }),
    email: z.string().email({
      message: "Email is invalid",
    }),
    password: z
      .string()
      .min(8, {
        message: "Password should be atleast 8 characters",
      })
      .max(20, {
        message: "Password should be atmost 20 characters",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const UserLoginSchema = z.object({
  email: z.string().email({
    message: "Email is invalid",
  }),
  password: z.string(),
});

export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;
export type UserSignupSchemaType = z.infer<typeof UserSignupSchema>;
