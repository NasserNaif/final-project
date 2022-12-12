import { Request, Response } from "express";

import { prisma } from "../config/DB";

export const getAllRequest = async (req: Request, res: Response) => {
  try {
    const getAllReques = await prisma.request.findMany();
    return res.status(200).json(getAllReques);
  } catch (error) {
    return res.status(500).json({
      message: "server error !",
    });
  }
};


export const postNewRequest =  async (req: Request, res: Response) => {
    try {
        // const newRequest = req.body as Req
      
    } catch (error) {
      return res.status(500).json({
        message: "server error !",
      });
    }
  };