import express from "express";
import {
  registerClient,
  registerProvider,
  registerUser,
} from "../controler/registerConroler";
import { validate } from "../middleware/validate";
import { registerSchema } from "../zodSchema/loginSchema";

const registerRouter = express.Router();

registerRouter.post("/", validate(registerSchema), registerUser);
registerRouter.post("/client", validate(registerSchema), registerClient);
registerRouter.post("/provider", validate(registerSchema), registerProvider);

export default registerRouter;
