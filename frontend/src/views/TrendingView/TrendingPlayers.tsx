import React, {useEffect} from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import TrendingPlayerRow from "./TrendingPlayerRow";
import ColorsPalette from "../../assets/Colors";
import PlayerDataApiService from "../../services/API/PlayerDataApiService";
import Loader from "../../components/Loader";
import {IPlayer} from "shared/player/types";

interface IProps {
    classes: any
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "inherit",
        width: "50%"
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
        height: "27%",
        position:"relative",
        overflow:"hidden",
    },
    trendingList: {
        top:0,
        position:"absolute",
        width: "100%"
    }
});

function TrendingPlayers(props: IProps) {
    const { classes } = props;
    const [trendingPlayers, setTrendingPlayers] = React.useState<IPlayer[]>([]);

    useEffect(() => {
        (async () => {
            const response = await PlayerDataApiService.getTrendingPlayers();
            if(response.ok && response.data) {
                setTrendingPlayers(response.data);
            }

        })()
    }, []);

    const renderTrendingPlayers = () => {
        return (<div className={classes.trendingListContainer}>
                    <div >
                    {trendingPlayers.map(player => <TrendingPlayerRow key={player.id} trendingPlayer={player}/> )}
            </div>
            </div>
        )
    }

    return (<div className={classes.root}>
            <div className={classes.header}>Trending</div>
            {trendingPlayers.length > 0? renderTrendingPlayers() :<Loader/> }
            </div>);
}

export default withStyles(styles)(TrendingPlayers);