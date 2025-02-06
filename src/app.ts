import express, { Application } from "express";
import cors from "cors";
import router from "./app/routes";

// application configuration
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use(`/api/v1`, router);

export default app;
