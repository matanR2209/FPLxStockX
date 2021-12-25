import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import {stores} from "../../state";
import {Observer} from "mobx-react";
import ColorsPalette from "../../assets/Colors";
import Utils from "../../Utils/Utils";
import PlayerInfoDataRow from "../../components/PlayerInfoDataRow";

interface IProps {
    classes: any
}

const PLAYER_DIALOG_BG = "https://fantasy.premierleague.com/static/media/eiw-bg-m.6f402e5a.svg"

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
        padding: ".2em",
        borderRadius: "0 0 .5em .5em",
    }
});

const playersStore = stores.playersStore;

function PlayerInfoView(props: IProps) {
    const { classes } = props;

    const renderTrend = () => {
     const trend = (playersStore._selectedPlayer.transfers_in_event - playersStore._selectedPlayer.transfers_out_event) / 100;
     return <div className={classes.sectionData} style={{color: trend < 0 ? ColorsPalette.trendRed : ColorsPalette.trendGreen}}>{trend}%</div>
    }

    const renderPlayerBio  = () => {
        return (<div className={classes.playerBio}>
            <div className={classes.playerName}>{playersStore._selectedPlayer.first_name} {playersStore._selectedPlayer.second_name}</div>
            <div className={classes.playerRole}>{`Position: ${playersStore._selectedPlayer.element_type}`}</div>
            <div className={classes.playerTeam}>{`Team: ${Utils.getTeamNameById(playersStore._selectedPlayer.team_code)}`}</div>
        </div>)
    }

    const renderPlayerImage = () => {
        return (<div>
            <img alt={playersStore._selectedPlayer.web_name} style={{height: "6em"}} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${playersStore._selectedPlayer.code}.png`}/>
        </div>)
    }

    const renderPlayerData = () => {
        return <div className={classes.playerDataSection}>
            <PlayerInfoDataRow dataKey={INFO_VIEW_HEADERS.OWNED_BY} dataValue={`${playersStore._selectedPlayer.selected_by_percent} %`} />
            <PlayerInfoDataRow dataKey={INFO_VIEW_HEADERS.TRANSFER_IN} dataValue={playersStore._selectedPlayer.transfers_in_event} />
            <PlayerInfoDataRow dataKey={INFO_VIEW_HEADERS.TRANSFER_OUT} dataValue={playersStore._selectedPlayer.transfers_out_event} />
            <PlayerInfoDataRow dataKey={INFO_VIEW_HEADERS.TREND} dataValue={renderTrend()}/>
        </div>
    }

    const renderPlayerSummary = () => {
        return (
            <div className={classes.summary}>
            <div>{INFO_VIEW_HEADERS.TOTAL_OWNERS}</div>
            <div className={classes.sectionData}>{playersStore._selectedPlayer.transfers_in}</div>
        </div>)
    }

    return (<Observer>
            {() => {return <div className={classes.root}>
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