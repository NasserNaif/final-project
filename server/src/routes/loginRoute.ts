import express from "express";
import { loginClint, loginProvider } from "../controler/loginContoler";
import { validate } from "../middleware/validate";
import { loginSchema, registerSchema } from "../zodSchema/loginSchema";

const loginRouter = express.Router();

loginRouter.post("/client", validate(loginSchema), loginClint);
loginRouter.post("/provider", validate(loginSchema), loginProvider);

export default loginRouter;
