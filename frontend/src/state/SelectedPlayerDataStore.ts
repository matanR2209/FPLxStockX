import PlayerDataApiService from "../services/API/PlayerDataApiService";
import {observable} from "mobx";
import {IPlayer, IPlayerStatsHistory} from "../../../shared/model/player/types";

export default class SelectedPlayerDataStore {
    @observable public playerTrendingStats: IPlayerStatsHistory | undefined;
    @observable public selectedPlayer: IPlayer | undefined;

    public getPlayerStats = async (playerId: string) => {
        this.playerTrendingStats = undefined;
        const response = await PlayerDataApiService.getPlayerStats(playerId);
        if(response.data && response.status === 200) {

            this.playerTrendingStats = response.data;
        }
    }
}
