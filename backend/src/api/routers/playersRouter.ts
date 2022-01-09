import * as express from "express";
import getPlayerData from "../controllers/players/getPlayerData";

const playersRouter = express.Router({mergeParams: true});

playersRouter.route("/:playerId" ).get(getPlayerData);

export default playersRouter;