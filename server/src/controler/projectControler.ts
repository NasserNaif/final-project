import { Project } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/DB";
import { IUser } from "../middleware/auth";
import { paramProfile, projectParamsType } from "../zodSchema/projectSchema";

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

export const getUser = async (req: Request, res: Response) => {
  try {
    const allUser = await prisma.user.findMany();

    return res.status(200).json(allUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

export const getProjectsRequest = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params as projectParamsType;
    const user = res.locals.user;

    const findProject = await prisma.project.findMany({
      where: { id: projectID, user_id: user.id },
      select: { request: true },
    });

    if (!findProject) {
      return res.status(400).json({
        message: "sorry this project doesn't exist !",
      });
    }
    return res.status(200).json(findProject);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

export const getProviderProfile = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params as paramProfile;

    const providerProfile = await prisma.profile.findFirst({
      where: { user_id },
      select: { summary: true, attament: true },
    });

    if (!providerProfile) {
      return res.status(401).json({
        message: "this account doesn't have profile !",
      });
    }

    return res.status(200).json(providerProfile);
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
    const user = res.locals.user as IUser;

    await prisma.project.create({
      data: {
        user_id: user.id,
        projectName: newProject.projectName,
        projectDiscription: newProject.projectDiscription,
        projectNumber: newProject.projectNumber,
        deadLine: newProject.deadLine,
      },
    });
    return res.status(201).json({
      message: "project added seccefully !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error !",
    });
  }
};