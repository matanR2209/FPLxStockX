import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import ColorsPalette from "../../assets/Colors";
import PlayerDataApiService from "../../services/API/PlayerDataApiService";
import RelatadPlayerRow from "./RelatadPlayerRow";
import {Observer} from "mobx-react";
import {stores} from "../../state";
import Loader from "../../components/Loader";
import {autorun} from "mobx";
import {IPlayer} from "../../shared/model/player/types";

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
    relatedPlayersContainer: {
        backgroundColor: "white",
        overflowY: "scroll",
        height: "27%",
        position:"relative",
        overflow:"hidden",
    },
    relatedList: {
        top:0,
        position:"absolute",
        width: "100%"
    }
});

const playersStore = stores.playersStore

function RelatedPlayers(props: IProps) {
    const { classes } = props;
    const [relatedPlayers, setRelatedPlayers] = React.useState<IPlayer[]>([]);

    React.useEffect(
        () =>
            autorun(async () => {
                const response = await PlayerDataApiService.getRelatedPlayers(playersStore.selectedPlayer.id);
                if(response.ok && response.data) {
                    setRelatedPlayers(response.data);
                } else {
                    console.error("Whhhops, somthing went wrong");
                }
            }),
        [],)



    const renderRelatedPlayers = () => {
        return (<div className={classes.relatedPlayersContainer}>
            <div className={classes.relatedList}>
                {relatedPlayers.map(player => <RelatadPlayerRow
                    key={player.id} relatedPlayer={player}/>)}
            </div>
        </div>)
    }

    return (<Observer>
            {() => {return (<div className={classes.root}>
                <div className={classes.header}>Related players</div>
                {relatedPlayers.length > 0? renderRelatedPlayers() : <Loader/>}
            </div>)}}
        </Observer>
    );
}

export default withStyles(styles)(RelatedPlayers);