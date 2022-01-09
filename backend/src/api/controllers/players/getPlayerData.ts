import {RequestHandler} from "express";
import {PlayerService} from "../../../services/playerService";

const getPlayerData: RequestHandler = async (req, res, next) => {
    try {
        console.log(req.params);
        const { playerId } = req.params;
        const playerStats = await PlayerService.getPlayerInfo(playerId);
        res.send(playerStats);
    } catch (e) {
        console.log(e);
    }
}

export default getPlayerData;