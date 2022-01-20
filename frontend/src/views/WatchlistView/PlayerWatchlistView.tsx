import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import ColorsPalette from "../../assets/Colors";
import Utils from "../../Utils/Utils";
import WatchListGraphView from "../GraphView/WatchListGraphView";
import {IPlayer} from "../../shared/model/player/types";

interface IProps {
    classes: any
    player: IPlayer
}

const HOVER_BOX_SHADOW = "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)";

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        fontSize: 12,
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 4px",
        marginBottom: "2em",
        marginLeft: "1em",
        padding: "1em 2em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        "&:hover": {
            boxShadow: HOVER_BOX_SHADOW,
            opacity: "0.7!important"
        }
    },
    leftSection: {
        display: "flex",
        flexDirection: "column"
    },
    playerName: {
        fontWeight: 700,
        fontSize: 14,
        color: ColorsPalette.lightGrey,
        marginBottom: "1em"
    },
    totalOwners: {
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        marginTop: "auto"
    },
    RightSection: {
        display: "flex",
        flexDirection: "column"
    },
    trendContainer: {
        marginTop: "auto"
    },
    trend: {
        display: "flex",
        marginLeft: "auto"
    }
});


function PlayerWatchlistView(props: IProps) {
    const { classes, player } = props;
    const trend = Utils.getPlayerTrend(player);
    return (
        <div className={classes.root}>
            <div className={classes.leftSection}>
                <div className={classes.playerName}>{player.web_name}</div>
                <div className={classes.totalOwners}>{player.transfers_in}</div>
            </div>

            <div className={classes.RightSection}>
                <div>
                    <WatchListGraphView/>
                </div>
                <div className={classes.trend} style={{color: trend < 0 ? ColorsPalette.trendRed : ColorsPalette.trendGreen}}>{trend}%</div>
            </div>
        </div>
    );
}

export default withStyles(styles)(PlayerWatchlistView);