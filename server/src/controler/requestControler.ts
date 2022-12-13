import { Request, Response } from "express";

import { prisma } from "../config/DB";
import { Requests } from "@prisma/client";

export const postNewRequest = async (req: Request, res: Response) => {
  try {
    const newRequest = req.body as Requests;
    await prisma.requests.create({
      data: newRequest,
    });

    return res.status(201).json({
      message: "request sent seccesfully  !",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error !",
    });
  }
};
