import {RequestHandler} from "express";
import {PlayerService} from "../../../services/PlayerService";

export default class PlayersController {
    public static getPlayerData: RequestHandler = async (req, res, next) => {
        try {
            const { playerId } = req.params;
            const playerStats = await PlayerService.getPlayerInfo(playerId);
            res.json({ok: true, data: playerStats});
        } catch (e) {
            console.log(e);
        }
    }

    public static getTrendingPlayers: RequestHandler = async (req, res, next) => {
        try {
            const playerStats = await PlayerService.getTrendingPlayers();
            res.json({ok: true, data: playerStats});
        } catch (e) {
            console.log(e);
        }
    }

    public static getRelatedPlayers: RequestHandler = async (req, res, next) => {
        try {
            const { playerId } = req.params;
            const playerStats = await PlayerService.getRelatedPlayers(playerId);
            res.json({ok: true, data: playerStats});
        } catch (e) {
            console.log(e);
        }
    }
}