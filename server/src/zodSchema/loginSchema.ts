import { log } from "util";
import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "username is required !",
    }),
    password: z.string({
      required_error: "password is required !",
    }),
  }),
});

export type logInType = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "username is required !",
        invalid_type_error: "username must be string ",
      })
      .min(3, `username must be mure than 3 chars`),
    name: z.string({
      required_error: "name is required !??",
      invalid_type_error: "name must be string ",
    }),
    password: z
      .string({
        required_error: "password is required !",
        invalid_type_error: "password must be string ",
      })
      .min(6, `password must be mure than 6 chars`),
    email: z
      .string({
        required_error: "email is required !",
        invalid_type_error: "email must be string ",
      })
      .email(),
    phoneNumber: z
      .string({
        required_error: "phone number is required !",
        invalid_type_error: "phone number must be number ",
      })
      .regex(new RegExp(".*[0-9].*"))
      .min(10, `phine number must be equal 10 number`)
      .max(10, `phine number must be equal 10 number`),

    commercialRecord: z.string({
      required_error: "Commercial Record is required !",
      invalid_type_error: "Commercial Record must be number ",
    }),
  }),
});
