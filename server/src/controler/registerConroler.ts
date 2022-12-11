import { Client, Provider, User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/DB";
import * as argon2 from "argon2";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as User;
    const hashPassword = await argon2.hash(newUser.password);

    newUser.password = hashPassword;
    
    await prisma.user.create({
      data: newUser,
    });

    return res.status(201).json({
      message: "client added !",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error??",
    });
  }
};

export const registerClient = async (req: Request, res: Response) => {
  try {
    const newClient = req.body as Client;
    const hashPassword = await argon2.hash(newClient.password);

    newClient.password = hashPassword;

    await prisma.client.create({
      data: newClient,
    });

    return res.status(201).json({
      message: "client added !",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error???",
    });
  }
};
export const registerProvider = async (req: Request, res: Response) => {
  try {
    const newProvider = req.body as Provider;
    const hashPassword = await argon2.hash(newProvider.password);
    newProvider.password = hashPassword;
    await prisma.provider.create({
      data: newProvider,
    });

    return res.status(201).json({
      message: "client added !",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
