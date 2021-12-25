import {IPlayer} from "../../../shared/model/player/types";
import {stores} from "../state";

export default class Utils {
    public static getPlayerTrend = (trendingPlayer: IPlayer) => {
        return (trendingPlayer.transfers_in_event - trendingPlayer.transfers_out_event) / 100;
    }

    public static getTeamNameById = (teamId: number) => {
        return stores.teamsStore.teams.find(team => team.code === teamId)?.name;
    }
}
