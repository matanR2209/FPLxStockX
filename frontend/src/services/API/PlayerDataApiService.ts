import {NetworkService} from "../NetworkService";
import TRENDING_PLAYERS from "../../assets/TRENDING_PLAYERS";

export default class PlayerDataApiService {
    private static get basePath() {
        return `http://localhost:3001/player`;
    }

    public static getPlayerStats = async (playerId: string) => {
        const url = `${PlayerDataApiService.basePath}/${playerId}` ;
        return NetworkService.get(url)
    }

    public static getWatchlistPlayers = () => {
        return TRENDING_PLAYERS
    }

    public static getTrendingPlayers = () => {
        return TRENDING_PLAYERS
    }

    public static getRelatedPlayers = () => {
        return TRENDING_PLAYERS
    }
}