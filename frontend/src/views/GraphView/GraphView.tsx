import React from "react";
import {observer} from "mobx-react";
import {stores} from "../../state";
import Graph from "../../components/graph/Graph";

interface IProps {}

function GraphView(props: IProps) {
    return stores.playerDataStore.playerTrendingStats? <Graph playerStats={stores.playerDataStore.playerTrendingStats}/> : null;
}


export default observer(GraphView)