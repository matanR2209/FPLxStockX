import React, {useEffect} from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Button, Theme} from "@material-ui/core";
import FPLSSelect  from "../../components/FPLSSelect";
import {stores} from "../../state";
import { Observer } from "mobx-react"
import ColorsPalette from "../../assets/Colors";
import UserApiService from "../../services/API/UserApiService";
import {IPlayer} from "../../shared/model/player/types";

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
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        margin: "auto"
    },
    playerName: {
        fontWeight: 700,
        fontSize: 22,
        color: ColorsPalette.darkBlue,
        marginRight: "1em"
    },
    buttonContainer: {
        display: "flex",
        margin: "auto 0"
    }
});

const teamsStore = stores.teamsStore;
const playersStore = stores.playersStore;
const userStore = stores.userStore;

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

    const addToWatchlist = async () => {
        const response = await UserApiService.addPlayerToWatchlist(userStore.getUser()!.id, playersStore.selectedPlayer.id)
        if(response.ok){
            // TODO: New notification
            window.alert(`*(TODO)* ${playersStore.selectedPlayer.web_name} added to watchlist`)
        }
    }

    const renderSelectedPlayerHeaderAndActions = () => {
        return (<div className={classes.headerContainer}>
                <div className={classes.playerName}>{`${playersStore.selectedPlayer.first_name} ${playersStore.selectedPlayer.second_name}`}</div>
                <div>
                    <Button variant="outlined" color={"primary"} onClick={addToWatchlist}>
                        Add to my Watchlist
                    </Button>
                </div>
        </div>
        )
    }

    const renderControllers = () => {
        return (<>
                <div className={classes.selectContainer}><FPLSSelect onChange={(selectedTeamId: number) => updateSelectedTeam(selectedTeamId)} value={teamsStore.selectedTeam.toString()} items={teamsStore.presentedTeams}/></div>
                <div className={classes.selectContainer}><FPLSSelect onChange={(selectedPlayerId: number) =>updateSelectedPlayer(selectedPlayerId)} value={playersStore.selectedPlayer.code.toString()} items={playersStore.playersByTeamToPresent}/></div>
        </>)
    }

    return (<Observer>
            {() => {return <div className={classes.root}>
                {renderControllers()}
                {renderSelectedPlayerHeaderAndActions()}
            </div>}}
        </Observer>
    );
}

export default withStyles(styles)(PlayerSelectionControl);