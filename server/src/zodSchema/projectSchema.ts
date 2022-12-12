import { z } from "zod";

export const postProjectSchema = z.object({
  body: z.object({
    projectName: z
      .string({
        required_error: "projectname is required !",
        invalid_type_error: "project name must be string !",
      })
      .max(25, "project name must be less than 25 chars !"),
    projectDiscription: z.string({
      required_error: "project Discription is required !",
      invalid_type_error: "project Discription must be string !",
    }),
    projectDuration: z.string({
      required_error: "project Duration is required !",
      invalid_type_error: "project Duration must be string !",
    }),
    deadLine: z.optional(z.string()),
  }),
});
