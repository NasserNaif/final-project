import { Project } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/DB";

export const getAllProject = async (req: Request, res: Response) => {
  try {
    const allProject = await prisma.project.findMany();
    return res.status(200).json(allProject);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

export const postProject = async (req: Request, res: Response) => {
  try {
    
    const newProject = req.body as Project;
    await prisma.project.create({
      data: newProject,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error !",
    });
  }
};
