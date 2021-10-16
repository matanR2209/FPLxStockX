import PlayerDataApiService from "../services/API/PlayerDataApiService";
import {FPLSResponse} from "../shared/network";

export default class PlayerDataStore {
    public getPlayerStats = async (playerId: string) => {
        const response = await PlayerDataApiService.getPlayerStats(playerId);
        return response as FPLSResponse;
    }
}
