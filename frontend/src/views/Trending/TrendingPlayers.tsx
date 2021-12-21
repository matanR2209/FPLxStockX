import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";
import TrendingPlayerRow from "./TrendingPlayerRow";


interface IProps {
    classes: any
    trendingPlayers: IPlayer[]
}


const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    header: {
        fontWeight: "bold",
        color: "#2E3357",
        fontSize: 20
    },
    trendingListContainer: {
        backgroundColor: "white"
    }
});


function TrendingPlayers(props: IProps) {
    const { classes, trendingPlayers } = props;

    const renderTrendingPlayers = () => {
        return trendingPlayers.map(player => <TrendingPlayerRow trendingPlayer={player}/> )
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>Trending</div>
            <div className={classes.trendingListContainer}>{renderTrendingPlayers()}</div>
        </div>
    );
}

export default withStyles(styles)(TrendingPlayers);