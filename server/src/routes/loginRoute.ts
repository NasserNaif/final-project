import express from "express";
import { loginUser, registerUser } from "../controler/loginContoler";
import { validate } from "../middleware/validate";
import {
  loginUserSchema,
  registerUserSchema,
} from "../zodSchema/loginUserSchema";

const loginRouter = express.Router();

loginRouter.post("/", validate(loginUserSchema), loginUser);
loginRouter.post("/register", validate(registerUserSchema), registerUser);

export default loginRouter;
