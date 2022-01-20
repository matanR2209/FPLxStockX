import * as express from "express";
import PlayersController from "../controllers/players/PlayersController";
import {PlayersEndPoints} from "../../../../shared/src/network/enums";

const playerRouter = express.Router({mergeParams: true});

// TODO: to implement
playerRouter.route(`${PlayersEndPoints.GetPlayer}/:playerId` ).get(PlayersController.getPlayerData);

playerRouter.route(`${PlayersEndPoints.Related}/:playerId`).get(PlayersController.getRelatedPlayers);

playerRouter.route(`${PlayersEndPoints.Stats}/:playerId`).get(PlayersController.getPlayerStats);

playerRouter.route(PlayersEndPoints.Trending).get(PlayersController.getTrendingPlayers);

export default playerRouter;