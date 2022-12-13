import express from "express";
import {
  getAllProject,
  getProjectsRequest,
  postProject,
} from "../controler/projectControler";
import { authorize, protect } from "../middleware/auth";
import { validate } from "../middleware/validate";
import { postProjectSchema } from "../zodSchema/projectSchema";

const projectRouter = express.Router();

projectRouter.get(`/`, getAllProject);
projectRouter.get(`/:id`, protect, authorize("CLIENT"), getProjectsRequest);
projectRouter.post(
  `/`,
  protect,
  authorize("CLIENT"),
  validate(postProjectSchema),
  postProject
);

export default projectRouter;
