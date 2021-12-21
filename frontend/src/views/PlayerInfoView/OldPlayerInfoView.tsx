import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";

const PLAYER_DIALOG_BG = "https://fantasy.premierleague.com/static/media/eiw-bg-m.6f402e5a.svg"

interface IProps {
    classes: any
    player: IPlayer
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        width: "30%",
        fontSize: 12,
        backgroundColor: "#FFF",
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 4px",
        borderRadius: 10
    },
    header: {
        backgroundColor: "#37003c",
        backgroundImage: `url(${PLAYER_DIALOG_BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "33em 15em",
        backgroundPosition: "right top -4em",
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 4px",
        display: "flex",
        justifyContent: "space-between",
        padding: "1em",
        borderRadius: ".5em"
    },
    playerName: {
        color: "white",
        fontSize: 16,
        fontWeight: 600
    },
    playerRole: {
        backgroundColor: "#00ff87",
        color: "#37003c",
        padding: ".2em",
        fontWeight: 500
    },
    playerTeam: {
        color: "white",
        fontWeight: 400,
        fontSize: 14
    },
    basicStats: {
        margin: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    statKey: {
        fontWeight: "bold"
    },
    statValue: {
        textAlign: "center"
    },
    ictRank: {
        width:"100%",
        display: "flex",
        flexDirection: "column"
    },
    ictRankOverall: {
        margin: ".2em",
    },
    ictRankHeader: {
        padding: ".5em .2em",
        backgroundColor: "#37003c",
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 3
    },
    ictStatsContainer: {
        display: "flex",
        justifyContent: "space-between",
        color: "#37003c",
        padding: ".2em .5em",
        backgroundColor: "#efefef",
        borderRadius: ".2em",
        marginTop: ".1em"
    },
    statBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
        marginBottom: ".5em"
    },
    ictStatBox: {
        display: "flex",
        flexDirection: "column",
        margin: "auto"
    },
    ictKey: {
        textDecoration: "underline",
        fontWeight: "bold"
    },
    ictValue: {
        textAlign: "center"
    }
});


function OldPlayerInfoView(props: IProps) {
    const { classes, player } = props;

    const renderPlayerBasicStats = () => {
        return (<div className={classes.basicStats}>
                <div className={classes.statBox}>
                    <div className={classes.statKey}>Form</div>
                    <div className={classes.statValue}>{player.value_form}</div>
                </div>

                <div className={classes.statBox}>
                    <div className={classes.statKey}>Last GW</div>
                    <div className={classes.statValue}>{player.event_points}</div>
                </div>

                <div className={classes.statBox}>
                    <div className={classes.statKey}>Total points</div>
                    <div className={classes.statValue}>{player.total_points}</div>
                </div>

                <div className={classes.statBox}>
                    <div className={classes.statKey}>Price</div>
                    <div className={classes.statValue}>$ {player.now_cost / 10}</div>
                </div>

                <div className={classes.statBox}>
                    <div className={classes.statKey}>Team selected by</div>
                    <div className={classes.statValue}>{player.selected_by_percent} %</div>
                </div>
            </div>
        )
    }

    const renderPlayerICTScore = () => {
        if(!player) {
            return null;
        }
        return (
            <div className={classes.ictRank}>
                    <div className={classes.ictRankHeader}>{`ICT Rank for ${player.element_type}s`}</div>
                    <div className={classes.ictStatsContainer}>
                        <div className={classes.ictStatBox}>
                            <div className={classes.ictKey}>Influence</div>
                            <div className={classes.ictValue}>{player.influence_rank}</div>
                        </div>

                        <div className={classes.ictStatBox}>
                            <div className={classes.ictKey}>Creativity</div>
                            <div className={classes.ictValue}>{player.creativity_rank}</div>
                        </div>

                        <div className={classes.ictStatBox}>
                            <div className={classes.ictKey}>Threat</div>
                            <div className={classes.ictValue}>{player.threat_rank}</div>
                        </div>
                        <div className={classes.ictStatBox}>
                            <div className={classes.ictKey}>ICT index</div>
                            <div className={classes.ictValue}>{player.ict_index_rank}</div>
                        </div>
                        <div className={classes.ictStatBox}>
                            <div className={classes.ictKey}>Overall</div>
                            <div className={classes.ictValue}>{player.ict_index_rank}</div>
                        </div>
                    </div>
            </div>
        )
    }

    const renderPlayerDialogHeader = () => {
        return (
            <div className={classes.header}>
                <div className={classes.playerBio}>
                    <div className={classes.playerName}>{player.first_name} {player.second_name}</div>
                    <div className={classes.playerRole}>{`Position: ${player.element_type}`}</div>
                    <div className={classes.playerTeam}>{`Team: ${player.team_code}`}</div>
                </div>
                <div className={classes.playerImg}>
                    <img alt={player.web_name} style={{height: "9em"}} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}/>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            {renderPlayerDialogHeader()}
            {renderPlayerBasicStats()}
            {renderPlayerICTScore()}
        </div>
    );
}

export default withStyles(styles)(OldPlayerInfoView);