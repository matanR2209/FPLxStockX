import React from "react";
import MainTrendGraph from "../../components/graph/MainTrendGraph";
import {IPlayerStatsHistory, IStatsHistory} from "../../shared/model/player/types";
import {OnBoardingStage} from "../../shared/model/general/enums";
import {stores} from "../../state";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import ColorsPalette from "../../assets/Colors";
import {Observer} from "mobx-react";

interface IProps {
    classes: any;
}

const onBoardingStore = stores.onBoardingStore

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    onBoardingHighlight: {
        width: "100%",
        zIndex: 11,
        padding: ".5em",
        backgroundColor: ColorsPalette.white
    }
});

function MainTrendGraphView(props: IProps) {
    const { classes } = props;

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

    return (<Observer>
            {() => {return <div className={`${onBoardingStore.isOnComponentHighlighted(OnBoardingStage.PlayerGraphTrend)? classes.onBoardingHighlight: {}} `}>
                <MainTrendGraph playerStats={generateRandomStats()}/>
            </div>}}
        </Observer>
    );
}


export default withStyles(styles)(MainTrendGraphView);