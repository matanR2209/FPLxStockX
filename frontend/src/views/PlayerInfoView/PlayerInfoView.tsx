import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";

interface IProps {
    classes: any
    player: IPlayer
}

const PLAYER_DIALOG_BG = "https://fantasy.premierleague.com/static/media/eiw-bg-m.6f402e5a.svg"


const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        borderRadius: 10,
        backgroundColor: "#FFF",
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
        backgroundColor: "#37003c",
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
        backgroundColor: "#00ff87",
        color: "#37003c",
        padding: ".2em",
        marginBottom: ".3em"
    },
    playerTeam: {
        color: "white",
    },
    section: {
        marginBottom: "1em"
    },
    dataHeader: {
        fontSize: 14,
        color: "#CCCCCC"
    },
    sectionData: {
        fontSize: 22,
        fontWeight: 600
    },
    playerDataSection: {
        padding: "1em",
    },
    summary: {
        backgroundColor: "#37003c",
        color: "#FFF",
        padding: ".2em",
        borderRadius: "0 0 .5em .5em",
    }
});


function PlayerInfoView(props: IProps) {
    const { classes, player } = props;

    const renderTrend = () => {
     const trend = (player.transfers_in_event - player.transfers_out_event) / 100;
     return <div className={classes.sectionData} style={{color: trend < 0 ? "#FA2D00" : "#43D00A"}}>{trend}%</div>
    }

    const renderPlayerBio  = () => {
        return (<div className={classes.playerBio}>
            <div className={classes.playerName}>{player.first_name} {player.second_name}</div>
            <div className={classes.playerRole}>{`Position: ${player.element_type}`}</div>
            <div className={classes.playerTeam}>{`Team: ${player.team_code}`}</div>
        </div>)
    }

    const renderPlayerImage = () => {
        return (<div>
            <img alt={player.web_name} style={{height: "6em"}} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}/>
        </div>)
    }

    const renderPlayerData = () => {
        return <div className={classes.playerDataSection}>
            <div className={classes.section}>
                <div className={classes.dataHeader}>Owned by(%):</div>
                <div className={classes.sectionData}>{player.selected_by_percent} %</div>
            </div>
            <div className={classes.section}>
                <div className={classes.dataHeader}>Transfer in:</div>
                <div className={classes.sectionData}>{player.transfers_in_event} %</div>
            </div>
            <div className={classes.section}>
                <div className={classes.dataHeader}>Transfer out:</div>
                <div className={classes.sectionData}>{player.transfers_out_event} %</div>
            </div>
            <div className={classes.section}>
                <div className={classes.dataHeader}>Trend (%):</div>
                {renderTrend()}
            </div>
        </div>
    }

    const renderPlayerSummary = () => {
        return (
            <div className={classes.summary}>
            <div className={classes.dataHeader}>Total owners:</div>
            <div className={classes.sectionData}>????</div>
        </div>)
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                {renderPlayerImage()}
                {renderPlayerBio()}
            </div>
            {renderPlayerData()}
            {renderPlayerSummary()}
        </div>
    );
}

export default withStyles(styles)(PlayerInfoView);