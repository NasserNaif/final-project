import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export interface IUser {
  id: string;
  username: string;
  role: string;
}
export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "you are not allow in this page !",
      });
    }

    token = token.split(` `)[1];
    const user = jwt.verify(token, process.env.JWT_KEY as string) as IUser;

    res.locals.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "you are not allow in this page !",
    });
  }
};

export const authorize =
  (role: string) => (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user as IUser;
    if (role !== user.role) {
      return res.status(403).json({
        message: "You are not authorized to  enter this route !",
      });
    }
    next();
  };
