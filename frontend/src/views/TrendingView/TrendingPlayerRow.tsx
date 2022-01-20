import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import Utils from "../../Utils/Utils";
import ColorsPalette from "../../assets/Colors";
import {IPlayer} from "../../shared/model/player/types";


interface IProps {
    classes: any
    trendingPlayer: IPlayer
}


const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    trendingPlayerRowContainer: {
        margin: "1em",
        padding: ".5em",
        borderBottom: `2px solid ${ColorsPalette.appContentBackground}`,
        display: "flex",
        justifyContent: "space-between"
    }
});

function TrendingPlayerRow(props: IProps) {
    const { classes, trendingPlayer } = props;
    const trend = Utils.getPlayerTrend(trendingPlayer);

    const getTrendColor = () => {
        return trend < 0 ? classes.trendRed : classes.trendGreen;
    }
    return (
        <div className={classes.trendingPlayerRowContainer}>
          <div className={classes.trendingPlayerLeftSection}>
              <div>{trendingPlayer.web_name}</div>
              <div>{Utils.getTeamNameById(trendingPlayer.team_code)}</div>
          </div>
            <div className={classes.trendingPlayerRightSection}>
                <div>{trendingPlayer.transfers_in}</div>
                <div className={getTrendColor()} >{`${trendingPlayer.transfers_in_event} (${trend})`} </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(TrendingPlayerRow);