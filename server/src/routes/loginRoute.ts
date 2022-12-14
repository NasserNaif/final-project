import express from "express";
import {
  loginUser,
  newProfile,
  registerUser,
} from "../controler/loginContoler";
import { protect } from "../middleware/auth";
import { validate } from "../middleware/validate";
import {
  loginUserSchema,
  profileSchema,
  registerUserSchema,
} from "../zodSchema/loginUserSchema";

const loginRouter = express.Router();

loginRouter.post("/", validate(loginUserSchema), loginUser);
loginRouter.post("/register", validate(registerUserSchema), registerUser);
loginRouter.post(`/profile`, protect, validate(profileSchema), newProfile);

export default loginRouter;
