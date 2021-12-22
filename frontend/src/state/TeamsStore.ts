import {observable} from "mobx";
import {IPlayer} from "../../../shared/model/player/types";

export default class TeamsStore {
    @observable public selectedPlayer: IPlayer | undefined;
    getTeams = () => {

    }
}
