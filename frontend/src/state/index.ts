import TeamsStore from "./TeamsStore";
import PlayersStore from "./PlayersStore";

export const stores = {
    teamsStore: new TeamsStore(),
    playersStore: new PlayersStore()
};