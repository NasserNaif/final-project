import express from "express";
import { postNewRequest } from "../controler/requestControler";
import { authorize, protect } from "../middleware/auth";
import { validate } from "../middleware/validate";

const requestRouter = express.Router();

requestRouter.post(`/`, protect, authorize("PROVIDER"), postNewRequest);

export default requestRouter;
