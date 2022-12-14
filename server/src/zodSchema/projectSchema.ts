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
    projectNumber: z.string({
      required_error: "project number is required !",
      invalid_type_error: "project number must be string !",
    }),
    deadLine: z.optional(z.string()),
  }),
});

export const getProjectRequestSchema = z.object({
  params: z.object({
    projectID: z.string({
      required_error: "you must send project id ",
      invalid_type_error: "project id must be string ",
    }),
  }),
});
export type projectParamsType = z.infer<
  typeof getProjectRequestSchema
>["params"];

export const getProfileParams = z.object({
  params: z.object({
    user_id: z.string({
      required_error: "you must send project id ",
      invalid_type_error: "project id must be string ",
    }),
  }),
});
export type paramProfile = z.infer<typeof getProfileParams>["params"];