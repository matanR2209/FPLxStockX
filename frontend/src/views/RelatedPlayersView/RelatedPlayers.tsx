import React, {useEffect} from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";
import ColorsPalette from "../../assets/Colors";
import PlayerDataApiService from "../../services/API/PlayerDataApiService";
import RelatadPlayerRow from "./RelatadPlayerRow";


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
        height: "40%"
    }
});


function RelatedPlayers(props: IProps) {
    const { classes } = props;
    const [relatedPlayers, setRelatedPlayers] = React.useState<IPlayer[]>([]);

    useEffect(() => {
        setRelatedPlayers(PlayerDataApiService.getRelatedPlayers());
    },[]);

    const renderRelatedPlayers = () => {
        return relatedPlayers.map(player => <RelatadPlayerRow key={player.id} relatedPlayer={player}/> )
    }

    return (<div className={classes.root}>
        <div className={classes.header}>Related players</div>
        <div className={classes.relatedPlayersContainer}>{renderRelatedPlayers()}</div>
    </div>);
}

export default withStyles(styles)(RelatedPlayers);