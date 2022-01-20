import React from "react";
import MainTrendGraph from "../../components/graph/MainTrendGraph";
import {IPlayerStatsHistory, IStatsHistory} from "../../shared/model/player/types";

interface IProps {}

function MainTrendGraphView(props: IProps) {
    const generateRandomHistoryStats = (): IStatsHistory[] => {
        const res:  IStatsHistory[] = [];
        let now = new Date();
        for(let i = 0; i < 10; i++) {
            res.push({
                amount: Math.floor(Math.random() * (10000 - 1000) + 1000),
                date: now.setDate(now.getDate() + i * 7)
            })
        }
        return res
    }

    const generateRandomStats = (): IPlayerStatsHistory => {
        return {
            points: generateRandomHistoryStats(),
            transferIn: generateRandomHistoryStats(),
            transferOut: generateRandomHistoryStats(),
            totalOwners: generateRandomHistoryStats()
        }
    }
    return <MainTrendGraph playerStats={generateRandomStats()}/>;
}


export default MainTrendGraphView