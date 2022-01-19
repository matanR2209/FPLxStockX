import { action, computed, observable } from "mobx";
import { ISelectItem } from "../components/FPLSSelect";
import PLAYERS from "../assets/PLAYERS";
import { IPlayer } from "../shared/model/player/types";

export default class PlayersStore {
  @observable private _selectedPlayer: IPlayer = PLAYERS[0];
  @observable public _playersByTeam: IPlayer[] = [];

  @action
  updatePlayersBySelectedTeam(teamId: number) {
    this._playersByTeam = PLAYERS.filter(
      (player) => player.team_code === teamId
    );
  }

  @action
  updateSelectedPlayer(playerId: number) {
    this._selectedPlayer =
      this._playersByTeam.find((player) => player.code === playerId) ||
      PLAYERS[0];
  }

  get selectedPlayer() {
    return this._selectedPlayer;
  }

  @computed
  get playersByTeamToPresent(): ISelectItem[] {
    return this._playersByTeam.map((player) => {
      return { label: player.web_name, value: player.code };
    });
  }
}
