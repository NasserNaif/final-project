import cors from "cors";
import express from "express";
import { connectDB } from "./config/DB";
import loginRouter from "./routes/loginRoute";
import projectRouter from "./routes/projectRouter";
import registerRouter from "./routes/registerRouter";

const app = express();

// methods
app.use(express.json());
app.use(cors());

connectDB();

// routes
app.use(`/api/v1/login`, loginRouter);
app.use(`/api/v1/register`, registerRouter);
app.use(`/api/v1/project`, projectRouter);

const PORT = process.env.PORT || 5008;

app.listen(PORT, () => {
  console.log("server running in " + PORT);
});
