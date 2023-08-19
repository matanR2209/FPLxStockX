import { stores } from "../state";
import {PlayerPositionsByName} from "shared/player/enums";
import {IPlayer} from "shared/player/types";

export default class Utils {
  public static getPlayerTrend = (trendingPlayer: IPlayer) => {
    return (
      (trendingPlayer.transfers_in_event - trendingPlayer.transfers_out_event) /
      100
    );
  };

  public static getTeamNameById = (teamId: number) => {
    return stores.teamsStore.teams.find((team) => team.code === teamId)?.name;
  };

  public static getPlayerPositionName = (position: number) => {
    console.log(position);
    switch (position) {
      case 1: return PlayerPositionsByName.Goalkeeper;
      case 2: return PlayerPositionsByName.Defender;
      case 3: return PlayerPositionsByName.Midfielder;
      case 4: return PlayerPositionsByName.Forward;
    }
}
}
