import React, {useEffect} from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";
import FPLSSelect, {ISelectItem} from "../../components/FPLSSelect";
import {stores} from "../../state";

interface IProps {
    classes: any
    player: IPlayer
}

const PLAYER_DIALOG_BG = "https://fantasy.premierleague.com/static/media/eiw-bg-m.6f402e5a.svg"


const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "1em"
    },
    selectContainer: {
        width: "10em",
        marginRight: "2em"
    }
});


function PlayerSelectionControl(props: IProps) {
    const { classes } = props;

    useEffect(() => {
        stores.teamsStore.getTeams()
    }, [])

    const teams: ISelectItem[] = [
        {label: "Team A", value: 1},
        {label: "Team B", value: 2},
        {label: "Team C", value: 3},
    ]

    const players: ISelectItem[] = [
        {label: "Player A", value: 1},
        {label: "Player B", value: 2},
        {label: "Player C", value: 3},
    ]

    return (
        <div className={classes.root}>
            <div className={classes.selectContainer}><FPLSSelect onChange={(val) => console.log(val)} value={"TEAMS"} items={teams}/></div>
            <div className={classes.selectContainer}><FPLSSelect onChange={(val) => console.log(val)} value={"PLAYERS"} items={players}/></div>
        </div>
    );
}

export default withStyles(styles)(PlayerSelectionControl);