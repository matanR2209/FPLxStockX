import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import {stores} from "../../state";
import {Observer} from "mobx-react";
import ColorsPalette from "../../assets/Colors";
import Utils from "../../Utils/Utils";
import PlayerInfoDataRow from "../../components/PlayerInfoDataRow";
import {OnBoardingStage} from "../../shared/model/general/enums";

interface IProps {
    classes: any
}

const PLAYER_DIALOG_BG = "https://fantasy.premierleague.com/static/media/eiw-bg-m.6f402e5a.svg"
const PLAYER_IMAGE_PREFIX = "https://resources.premierleague.com/premierleague/photos/players/110x140/p"

const INFO_VIEW_HEADERS = {
    OWNED_BY: "Owned by(%): ",
    TRANSFER_IN: "Transfer in: ",
    TRANSFER_OUT: "Transfer out: ",
    TREND: "Trend (%): ",
    TOTAL_OWNERS: "Total owners: "
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        width: "35%",
        borderRadius: 10,
        backgroundColor: ColorsPalette.white,
        display: "flex",
        flexDirection: "column",
        height: "fit-content"
    },
    playerBio: {
        fontSize: 12,
        fontWeight: "bold",
        padding: "1em"
    },
    header: {
        backgroundColor: ColorsPalette.playerInfoView.purple,
        backgroundImage: `url(${PLAYER_DIALOG_BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "12em 15em",
        backgroundPosition: "right top -4em",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: ".5em .5em 0 0",

    },
    playerName: {
        color: "white",
        marginBottom: ".3em"
    },
    playerRole: {
        backgroundColor: ColorsPalette.playerInfoView.roleBackground,
        color: ColorsPalette.playerInfoView.purple,
        padding: ".2em",
        marginBottom: ".3em"
    },
    playerTeam: {
        color: "white",
    },
    playerDataSection: {
        padding: "1em",
    },
    summary: {
        backgroundColor: ColorsPalette.playerInfoView.purple,
        color: ColorsPalette.white,
        padding: "1em .5em",
        borderRadius: "0 0 .5em .5em",
        display: "flex",
        flexDirection: "row"
    },
    onBoardingHighlight: {
        zIndex: 11,
        padding: ".5em",
        backgroundColor: ColorsPalette.white
    }
});

const playersStore = stores.playersStore;
const onBoardingStore = stores.onBoardingStore

function PlayerInfoView(props: IProps) {
    const { classes } = props;
    const renderTrend = () => {
     const trend = (playersStore.selectedPlayer.transfers_in_event - playersStore.selectedPlayer.transfers_out_event) / 100;
     return <div className={classes.sectionData} style={{color: trend < 0 ? ColorsPalette.trendRed : ColorsPalette.trendGreen}}>{trend}%</div>
    }

    const renderPlayerBio  = () => {
        return (<div className={classes.playerBio}>
            <div className={classes.playerName}>{playersStore.selectedPlayer.first_name} {playersStore.selectedPlayer.second_name}</div>
            <div className={classes.playerRole}>{`Position: ${playersStore.selectedPlayer.element_type}`}</div>
            <div className={classes.playerTeam}>{`Team: ${Utils.getTeamNameById(playersStore.selectedPlayer.team_code)}`}</div>
        </div>)
    }

    const renderPlayerImage = () => {
        return (<div>
            <img alt={playersStore.selectedPlayer.web_name} style={{height: "6em"}} src={`${PLAYER_IMAGE_PREFIX}${playersStore.selectedPlayer.code}.png`}/>
        </div>)
    }

    const renderPlayerData = () => {
        return <div className={classes.playerDataSection}>
            <PlayerInfoDataRow dataKey={INFO_VIEW_HEADERS.OWNED_BY} dataValue={`${playersStore.selectedPlayer.selected_by_percent} %`} />
            <PlayerInfoDataRow dataKey={INFO_VIEW_HEADERS.TRANSFER_IN} dataValue={playersStore.selectedPlayer.transfers_in_event} />
            <PlayerInfoDataRow dataKey={INFO_VIEW_HEADERS.TRANSFER_OUT} dataValue={playersStore.selectedPlayer.transfers_out_event} />
            <PlayerInfoDataRow dataKey={INFO_VIEW_HEADERS.TREND} dataValue={renderTrend()}/>
        </div>
    }

    const renderPlayerSummary = () => {
        return (
            <div className={classes.summary}>
            <div>{`${INFO_VIEW_HEADERS.TOTAL_OWNERS}   ${playersStore.selectedPlayer.transfers_in}`}</div>
        </div>)
    }

    return (<Observer>
            {() => {return <div className={`${classes.root} ${onBoardingStore.isOnComponentHighlighted(OnBoardingStage.PlayerView)? classes.onBoardingHighlight: {}} `}>
                <div className={classes.header}>
                    {renderPlayerImage()}
                    {renderPlayerBio()}
                </div>
                {renderPlayerData()}
                {renderPlayerSummary()}
            </div>}}
        </Observer>
    );

}

export default withStyles(styles)(PlayerInfoView);