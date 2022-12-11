import { z } from "zod";

export const postProject = z.object({
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
  }),
});
