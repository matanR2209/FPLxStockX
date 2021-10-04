import * as express from "express";
import getPlayerData from "../player/getPlayerData";

const playerRouter = express.Router();

playerRouter
    .route("/:playerId" ).get(getPlayerData);

export default playerRouter;
