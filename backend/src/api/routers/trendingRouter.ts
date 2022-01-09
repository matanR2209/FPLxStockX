import * as express from "express";
import getTrendingPlayers from "../controllers/trending/getTrendingPlayers";

const trendingRouter = express.Router({mergeParams: true});

trendingRouter.route("/" ).get(getTrendingPlayers);

export default trendingRouter;