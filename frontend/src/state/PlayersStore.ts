import {action, computed, observable} from "mobx";
import {IPlayer} from "../../../shared/model/player/types";
import {ISelectItem} from "../components/FPLSSelect";
import PLAYERS from "../assets/PLAYERS";

export default class PlayersStore {
    @observable public _playersByTeam: IPlayer[] = [];
    @observable public _selectedPlayer: IPlayer = PLAYERS[0];

    @action
    updatePlayersBySelectedTeam(teamId: number) {
        this._playersByTeam = PLAYERS.filter(player => player.team_code === teamId);
    }

    @action
    updateSelectedPlayer(playerId: number) {
        this._selectedPlayer = this._playersByTeam.find(player => player.code === playerId) || PLAYERS[0];
    }

    @computed
    get playersByTeamToPresent(): ISelectItem[] {
        return this._playersByTeam.map(player => {
            return {label: player.web_name, value: player.code}
        })
    }
}
