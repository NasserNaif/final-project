import express from "express";
import {
  getAllClient,
  getAllProject,
  postProject,
} from "../controler/clientControler";
import { authorize, protect } from "../middleware/auth";
import { validate } from "../middleware/validate";
import { postProjectSchema } from "../zodSchema/projectSchema";

const clientRouter = express.Router();

clientRouter.get(`/client`, getAllClient);
clientRouter.get(`/`, protect, authorize("CLIENT"), getAllProject);
clientRouter.post(
  `/`,
  protect,
  authorize("CLIENT"),
  validate(postProjectSchema),
  postProject
);

export default clientRouter;
