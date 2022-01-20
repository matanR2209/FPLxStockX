import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import PlayerWatchlistView from "./PlayerWatchlistView";
import ColorsPalette from "../../assets/Colors";
import {stores} from "../../state";
import {Observer} from "mobx-react";
import Loader from "../../components/Loader";

interface IProps {
    classes: any
}


const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    header: {
        color: ColorsPalette.darkBlue,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "1em",
        display: "flex",
        margin: "auto"
    },
    verticalScrollerContainer: {
        position:"relative",
        height: "95%",
        overflow:"hidden",
        overflowY:"hidden"
    },
    watchlistPlayersContainer: {
        top:0,
        position:"absolute",
        animation: `$scroll 8s linear 1s infinite`
    },
    "@keyframes scroll": {
        "100%": { top: -360 }
    },
});

const userStore = stores.userStore;
const onBoardingStore = stores.onBoardingStore;

function WatchlistContainer(props: IProps) {
    const { classes } = props;

    const renderWatchlist = () => {
        return (
            <div className={classes.verticalScrollerContainer}>
                <div className={classes.watchlistPlayersContainer}>
                    {userStore.userWatchlist? userStore.userWatchlist.map(player => <PlayerWatchlistView key={player.id} player={player}/>) : null}
                </div>
            </div>
        )
    }

    return (<Observer>
            {() => {return (<>
                   <div className={classes.header}>Watchlist</div>
                    {userStore.userWatchlist? renderWatchlist() : <Loader/> }

            </>)}}
        </Observer>
    );
}


export default withStyles(styles)(WatchlistContainer);