import { Request, Response } from "express";
import { prisma } from "../config/DB";
import { logInType } from "../zodSchema/loginSchema";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";


export const loginClint = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as logInType["body"];

    const client = await prisma.client.findUnique({
      where: { username },
    });

    if (!client) {
      return res.status(400).json({
        message: "inncorect username or password !",
      });
    }

    const clientPassword = await argon2.verify(client.password, password);

    if (!clientPassword) {
      return res.status(400).json({
        message: "inncorect password or username !",
      });
    }
    const token = jwt.sign(
      { id: client.id, username: client.username },
      process.env.JWT_KEY as string
    );

    
    return res.status(201).json({
      message: `welcome back ${client.name}`,
      token,
    });


  } catch (error) {
    return res.status(500).json({
      message: "server error???",
    });
  }
};

export const loginProvider = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as logInType["body"];

    const provider = await prisma.provider.findUnique({
      where: { username },
    });

    if (!provider) {
      return res.status(400).json({
        message: "inncorect username or password !",
      });
    }

    const clientPassword = await argon2.verify(provider.password, password);
    if (!clientPassword) {
      return res.status(400).json({
        message: "inncorect password or username !",
      });
    }
    const token = jwt.sign(
      { id: provider.id, username: provider.username },
      process.env.JWT_KEY as string
    );
    return res.status(201).json({
      message: `welcome back ${provider.name}`,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error???",
    });
  }
};
