import * as express from "express";
import playersRouter from "./playerRouter";

const appRouter = express.Router();

appRouter.use("/player" , playersRouter);