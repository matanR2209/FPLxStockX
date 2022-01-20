import * as express from "express";
import PlayersController from "../controllers/players/playersController";
import {PlayersEndPoints} from "../../shared/model/network/enums";

const playerRouter = express.Router({mergeParams: true});

// TODO: to implement
playerRouter.route(`${PlayersEndPoints.GetPlayer}/:playerId` ).get(PlayersController.getPlayerData);

playerRouter.route(`${PlayersEndPoints.Related}/:playerId`).get(PlayersController.getRelatedPlayers);

playerRouter.route(`${PlayersEndPoints.Stats}/:playerId`).get(PlayersController.getPlayerStats);

playerRouter.route(PlayersEndPoints.Trending).get(PlayersController.getTrendingPlayers);

export default playerRouter;