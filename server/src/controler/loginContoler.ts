import { Request, Response } from "express";
import { prisma } from "../config/DB";
import { logInType } from "../zodSchema/loginUserSchema";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import { Profile, User } from "@prisma/client";
import { IUser } from "../middleware/auth";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as logInType["body"];

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(400).json({
        message: "inncorect username or password !",
      });
    }

    const userPassword = await argon2.verify(user.password, password);

    if (!userPassword) {
      return res.status(400).json({
        message: "inncorect password or username !",
      });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_KEY as string
    );

    return res.status(201).json({
      message: `welcome back ${user.name}`,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error???",
    });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as User;
    const hashPassword = await argon2.hash(newUser.password);

    newUser.password = hashPassword;

    await prisma.user.create({
      data: newUser,
    });

    return res.status(201).json({
      message: "seccesfull register !",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error??",
    });
  }
};

export const newProfile = async (req: Request, res: Response) => {
  try {
    const newProfile = req.body as Profile;
    const { id } = res.locals.user as IUser;

    await prisma.profile.create({
      data: {
        user_id: id,
        summary: newProfile.summary,
        // attament: newProfile.attament,
      },
    });

    return res.status(201).json({
      message: "profile updated !",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error??",
    });
  }
};