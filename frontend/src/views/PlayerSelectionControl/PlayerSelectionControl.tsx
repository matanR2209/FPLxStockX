import React, {useEffect} from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";
import FPLSSelect  from "../../components/FPLSSelect";
import {stores} from "../../state";
import { Observer } from "mobx-react"


interface IProps {
    classes: any
    player: IPlayer
}

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

const teamsStore = stores.teamsStore;
const playersStore = stores.playersStore;

const PlayerSelectionControl = (props: IProps) => {
    const { classes } = props;
    useEffect( () => {
        teamsStore.getTeams()
    }, [])

    const updateSelectedTeam = (selectedTeamId: number) => {
        teamsStore.selectedTeam = selectedTeamId;
        playersStore.updatePlayersBySelectedTeam(selectedTeamId)
    }

    const updateSelectedPlayer = (selectedPlayerId: number) => {
        playersStore.updateSelectedPlayer(selectedPlayerId);
    }

    return (<Observer>
            {() => {return <div className={classes.root}>
                <div className={classes.selectContainer}><FPLSSelect onChange={(selectedTeamId: number) => updateSelectedTeam(selectedTeamId)} value={teamsStore.selectedTeam.toString()} items={teamsStore.presentedTeams}/></div>
                <div className={classes.selectContainer}><FPLSSelect onChange={(selectedPlayerId: number) =>updateSelectedPlayer(selectedPlayerId)} value={playersStore._selectedPlayer.code.toString()} items={playersStore.playersByTeamToPresent}/></div>
            </div>}}
        </Observer>

    );
}

export default withStyles(styles)(PlayerSelectionControl);