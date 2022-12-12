import express from "express";
import { getAllRequest } from "../controler/requestControler";
import { authorize } from "../middleware/auth";
import { validate } from "../middleware/validate";

const requestRouter = express.Router();

requestRouter.get(`/`, getAllRequest);
requestRouter.post(`/`, authorize("PROVIDER"));

export default requestRouter;
