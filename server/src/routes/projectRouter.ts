import express from "express";
import {
  getAllProject,
  getProjectsRequest,
  getProviderProfile,
  getUser,
  postProject,
} from "../controler/projectControler";
import { authorize, protect } from "../middleware/auth";
import { validate } from "../middleware/validate";
import { postProjectSchema } from "../zodSchema/projectSchema";

const projectRouter = express.Router();


projectRouter.get(`/user`, getUser)
projectRouter.get(`/`, getAllProject);
projectRouter.get(
  `/request/:id`,
  protect,
  authorize("CLIENT"),
  getProjectsRequest
);
projectRouter.get(`/profile/:id`, protect, getProviderProfile);

projectRouter.post(
  `/`,
  protect,
  authorize("CLIENT"),
  validate(postProjectSchema),
  postProject
);

export default projectRouter;
