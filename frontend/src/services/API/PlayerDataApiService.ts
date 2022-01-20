import {NetworkService} from "../NetworkService";
import {ApiEndpoints, PlayersEndPoints} from "../../shared/model/network/enums";


export default class PlayerDataApiService {
    private static get basePath() {
        return `http://localhost:3001`;
    }

    public static getPlayerStats = async (playerId: string) => {
        const url = `${PlayerDataApiService.basePath}${ApiEndpoints.Players}/${playerId}` ;
        return NetworkService.get(url)
    }

    public static getTrendingPlayers = () => {
        const url = `${PlayerDataApiService.basePath}${ApiEndpoints.Players}${PlayersEndPoints.Trending}` ;
        return NetworkService.get(url)
    }

    public static getRelatedPlayers = (selectedPlayerId: number) => {
        const url = `${PlayerDataApiService.basePath}${ApiEndpoints.Players}${PlayersEndPoints.Related}/${selectedPlayerId}` ;
        return NetworkService.get(url)
    }

    public static getPlayerHistoryStats = (selectedPlayerId: number) => {
        const url = `${PlayerDataApiService.basePath}${ApiEndpoints.Players}${PlayersEndPoints.Stats}/${selectedPlayerId}` ;
        return NetworkService.get(url)
    }
}