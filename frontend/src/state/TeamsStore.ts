import { computed, observable } from "mobx";
import { ISelectItem } from "../components/FPLSSelect";
import TEAMS from "../assets/TEAMS";
import {ITeam} from "shared/team/types";

export default class TeamsStore {
  @observable public teams: ITeam[] = [];
  @observable public selectedTeam: number = 1;

  getTeams = async () => {
    this.teams = TEAMS;
  };

  @computed
  get presentedTeams(): ISelectItem[] {
    return this.teams.map((team) => {
      return { label: team.name, value: team.code };
    });
  }
}
