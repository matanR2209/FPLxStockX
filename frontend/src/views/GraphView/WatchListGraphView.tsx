import React from "react";
import {observer} from "mobx-react";
import WatchListGraph from "../../components/graph/WatchListGraph";

interface IProps {}

function WatchListGraphView(props: IProps) {
    return <WatchListGraph/>;
}


export default observer(WatchListGraphView)