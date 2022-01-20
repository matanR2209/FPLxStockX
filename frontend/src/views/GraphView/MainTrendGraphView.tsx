import React from "react";
import MainTrendGraph from "../../components/graph/MainTrendGraph";
import {IPlayerStatsHistory} from "../../shared/model/player/types";
import {autorun} from "mobx";
import PlayerDataApiService from "../../services/API/PlayerDataApiService";
import {stores} from "../../state";
import Loader from "../../components/Loader";

interface IProps {}

const playersStore = stores.playersStore

function MainTrendGraphView(props: IProps) {
    const [selectedPlayerStats, setSelectedPlayerStats] = React.useState<IPlayerStatsHistory | undefined>(undefined);

    React.useEffect(
        () =>
            autorun(async () => {
                const response = await PlayerDataApiService.getPlayerHistoryStats(playersStore.selectedPlayer.id);
                if(response.ok && response.data) {
                    setSelectedPlayerStats(response.data);
                } else {
                    console.error("Whhhops, somthing went wrong");
                }
            }),
        [],)
    return selectedPlayerStats? <MainTrendGraph playerStats={selectedPlayerStats}/> : <Loader/>;
}


export default MainTrendGraphView