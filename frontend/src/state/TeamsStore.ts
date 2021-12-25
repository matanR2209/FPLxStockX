import {computed, observable} from "mobx";
import {ITeam} from "../../../shared/model/team/types";
import {ISelectItem} from "../components/FPLSSelect";
import TEAMS from "../assets/TEAMS";

export default class TeamsStore {
    @observable public teams: ITeam[] = [] ;
    @observable public selectedTeam: number = 1;

    getTeams = async () => {
            this.teams = TEAMS;
    }

    @computed
    get presentedTeams(): ISelectItem[] {
        return this.teams.map(team => {
            return {label: team.name, value: team.code}
        })
    }
}
