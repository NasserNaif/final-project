import { Request, Response } from "express";

import { prisma } from "../config/DB";
import { Requests } from "@prisma/client";
import { IUser } from "../middleware/auth";
import { registerUser } from "./loginContoler";

export const postNewRequest = async (req: Request, res: Response) => {
  try {
    const { requestBudget, requestDiscription, requestName, project_id } =
      req.body as Requests;
    const user = res.locals.user as IUser;

    await prisma.requests.create({
      data: {
        requestName,
        requestDiscription,
        requestBudget,
        user_id: user.id,
        project_id,
      },
    });

    return res.status(201).json({
      message: "request sent seccesfully  !",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error !???",
    });
  }
};
