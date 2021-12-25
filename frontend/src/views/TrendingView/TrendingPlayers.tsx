import React, {useEffect} from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";
import TrendingPlayerRow from "./TrendingPlayerRow";
import ColorsPalette from "../../assets/Colors";
import PlayerDataApiService from "../../services/API/PlayerDataApiService";


interface IProps {
    classes: any
}


const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "inherit",
        width: "47%"
    },
    header: {
        fontWeight: "bold",
        color: ColorsPalette.darkBlue,
        fontSize: 20,
        margin: ".5em 0"
    },
    trendingListContainer: {
        backgroundColor: "white",
        overflowY: "scroll",
        height: "40%"
    }
});


function TrendingPlayers(props: IProps) {
    const { classes } = props;
    const [trendingPlayers, setWatchlistPlayers] = React.useState<IPlayer[]>([]);

    useEffect(() => {
        setWatchlistPlayers(PlayerDataApiService.getTrendingPlayers());
    },[]);

    const renderTrendingPlayers = () => {
        return trendingPlayers.map(player => <TrendingPlayerRow trendingPlayer={player}/> )
    }

    return (<div className={classes.root}>
                <div className={classes.header}>Trending</div>
                <div className={classes.trendingListContainer}>{renderTrendingPlayers()}</div>
            </div>);
}

export default withStyles(styles)(TrendingPlayers);