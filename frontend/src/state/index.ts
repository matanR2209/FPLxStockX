import SelectedPlayerDataStore from "./SelectedPlayerDataStore";
import RelatedPlayersStore from "./RelatedPlayersStore";
import TrendingPlayersStore from "./TrendingPlayersStore";
import TeamsStore from "./TeamsStore";

export const stores = {
    playerDataStore: new SelectedPlayerDataStore(),
    relatedPlayersStore: new RelatedPlayersStore(),
    trendingPlayersStore: new TrendingPlayersStore(),
    teamsStore: new TeamsStore(),
};