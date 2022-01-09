import {RequestHandler} from "express";
import {PlayerService} from "../../../services/playerService";

const getTrendingPlayers: RequestHandler = async (req, res, next) => {
    try {
        const trendingPlayers = await PlayerService.getTrendingPlayers();
        res.send(trendingPlayers);
    } catch (e) {
        console.log(e);
    }
}

export default getTrendingPlayers;