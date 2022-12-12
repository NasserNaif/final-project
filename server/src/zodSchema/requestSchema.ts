import { z } from "zod";

export const requestSchema = z.object({
  body: z.object({
    requestName: z
      .string({
        required_error: "request name is required !",
        invalid_type_error: "invalid type in name",
      })
      .max(30, "request name must be less than 30 letters "),
    requestDiscription: z.string({
      required_error: "request Disc is required !",
      invalid_type_error: "invalid type in Disc",
    }),
    requestBudget: z.number({
      required_error: "request budget is required !",
      invalid_type_error: "invalid type in budget",
    }),
    requestAttachment: z.optional(z.string()),
  }),
});
