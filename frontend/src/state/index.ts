import TeamsStore from "./TeamsStore";
import PlayersStore from "./PlayersStore";
import UserStore from "./UserStore";

export const stores = {
    teamsStore: new TeamsStore(),
    playersStore: new PlayersStore(),
    userStore: new UserStore()
};