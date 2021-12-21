import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";


interface IProps {
    classes: any
    trendingPlayer: IPlayer
}


const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    trendingPlayerRowContainer: {
        margin: "1em",
        padding: ".5em",
        borderBottom: "2px solid #F6F6F6",
        display: "flex",
        justifyContent: "space-between"
    },
    trendingPlayerLeftSection: {

    },
    trendingPlayerRightSection: {}
});


function TrendingPlayerRow(props: IProps) {
    const { classes, trendingPlayer } = props;

    const trend = (trendingPlayer.transfers_in_event - trendingPlayer.transfers_out_event) / 100;

    return (
        <div className={classes.trendingPlayerRowContainer}>
          <div className={classes.trendingPlayerLeftSection}>
              <div>{trendingPlayer.web_name}</div>
              <div>{trendingPlayer.team}</div>
          </div>
            <div className={classes.trendingPlayerRightSection}>
                <div>{trendingPlayer.transfers_in}</div>
                <div style={{color: trend < 0 ? "#FA2D00" : "#43D00A"}}>{`${trendingPlayer.transfers_in_event} (${trend})`} </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(TrendingPlayerRow);