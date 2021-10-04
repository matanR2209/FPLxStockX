import * as express from "express";
import playerRouter from "./playerRouter";

const appRouter = express.Router();

appRouter.use("/player" , playerRouter);