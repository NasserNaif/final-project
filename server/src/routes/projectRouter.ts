import express from "express";
import { getAllProject, postProject } from "../controler/projectControler";
import { authorize, protect } from "../middleware/auth";
import { validate } from "../middleware/validate";
import { postProjectSchema } from "../zodSchema/projectSchema";

const clientRouter = express.Router();

clientRouter.get(`/`, protect, getAllProject);
clientRouter.post(
  `/`,
  protect,
  authorize("CLIENT"),
  validate(postProjectSchema),
  postProject
);

export default clientRouter;
