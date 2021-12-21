import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";

interface IProps {
    classes: any
    player: IPlayer
}

const BOX_SHADOW =
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)";

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        fontSize: 12,
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 4px",
        marginBottom: "2em",
        padding: "1em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "pointer",
        "&:hover": {
            boxShadow: BOX_SHADOW,
            opacity: "0.7!important"
        }
    },
    leftSection: {},
    playerName: {
        fontWeight: 700,
        fontSize: 14,
        color: "#9FA0A9",
        marginBottom: "1em"
    },
    totalOwners: {
        fontSize: 20,
        fontWeight: "bold"
    },
    RightSection: {
        display: "flex",
        flexDirection: "column"
    },
    trendContainer: {
        marginTop: "auto"
    }
});


function PlayerWatchlistView(props: IProps) {
    const { classes, player } = props;
    return (
        <div className={classes.root}>
            <div className={classes.leftSection}>
                <div className={classes.playerName}>{player.web_name}</div>
                <div className={classes.totalOwners}>total owners</div>
            </div>

            <div className={classes.RightSection}>
                <div>small graph</div>
                <div className={classes.trendContainer}>trend </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(PlayerWatchlistView);