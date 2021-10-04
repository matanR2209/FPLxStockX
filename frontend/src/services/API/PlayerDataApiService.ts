import {NetworkService} from "../NetworkService";

export default class PlayerDataApiService {
    private static get basePath() {
        return `http://localhost:3001/player`;
    }

    public static getPlayerStats = async (playerId: string) => {
        const url = `${PlayerDataApiService.basePath}/${playerId}` ;
        return NetworkService.get(url)
    }
}