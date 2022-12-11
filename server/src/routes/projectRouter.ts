import express from "express";
import { getAllProject, postProject } from "../controler/projectControler";
import { protect } from "../middleware/auth";
import { validate } from "../middleware/validate";

const projectRouter = express.Router();

projectRouter.get(`/`,  getAllProject);
projectRouter.post(`/`,  postProject);

export default projectRouter;
