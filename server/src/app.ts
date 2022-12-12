import cors from "cors";
import express from "express";
import { connectDB } from "./config/DB";
import loginRouter from "./routes/loginRoute";
import clientRouter from "./routes/projectRouter";

const app = express();

// methods
app.use(express.json());
app.use(cors());

connectDB();

// routes
app.use(`/api/v1/login`, loginRouter);
app.use(`/api/v1/project`, clientRouter);

const PORT = process.env.PORT || 5008;

app.listen(PORT, () => {
  console.log("server running in " + PORT);
});
