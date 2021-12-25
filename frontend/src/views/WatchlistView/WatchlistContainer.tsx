import React, {useEffect} from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import PlayerWatchlistView from "./PlayerWatchlistView";
import ColorsPalette from "../../assets/Colors";
import PlayerDataApiService from "../../services/API/PlayerDataApiService";
import {IPlayer} from "../../../../shared/model/player/types";

interface IProps {
    classes: any
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    header: {
        fontWeight: "bold",
        color: ColorsPalette.darkBlue,
        fontSize: 20,
        marginBottom: "1em"
    },
});

function WatchlistContainer(props: IProps) {
    const { classes } = props;
    const [watchlistPlayers, setWatchlistPlayers] = React.useState<IPlayer[]>([]);

    useEffect(() => {
        setWatchlistPlayers(PlayerDataApiService.getWatchlistPlayers());
    },[])

    return (
            <div className={classes.root}>
                <div className={classes.header}>Watchlist</div>
                {watchlistPlayers.map(player =><PlayerWatchlistView player={player}/> )}
            </div>
    );
}


export default withStyles(styles)(WatchlistContainer);