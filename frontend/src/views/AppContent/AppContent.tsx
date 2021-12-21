import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";
import PlayerInfoContainer from "../PlayerInfoView/PlayerInfoContainer";
import GraphView from "../GraphView/GraphView";
import WatchlistContainer from "../WatchlistView/WatchlistContainer";
import TrendingPlayers from "../Trending/TrendingPlayers";
import TRENDING_PLAYERS from "../../assets/FIXTURES";

interface IProps {
    classes: any;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    container: {
        backgroundColor: "#B2BBFF",
        display: "flex",
        width: "inherit"
    },
    content: {
        backgroundColor: "#F4F6F8",
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        margin: "auto 0",
        padding: "2em",
        height: "80%",
        width: "90%",
        display: "flex",
        flexDirection: "row",
    },
    leftSection: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "initial"
    },
    leftSectionTopRow: {
        display: "flex",
        flexDirection: "row",
    },
    leftSectionBottomRow: {
        marginTop: "1em",
        height: "inherit",
        overflowY: "scroll"
    },
    rightSection: {
        marginLeft: "1em"
    }
});

function AppContent(props: IProps) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.leftSection}>
                    <div className={classes.leftSectionTopRow}>
                        <PlayerInfoContainer/>
                        <GraphView/>
                    </div>
                    <div className={classes.leftSectionBottomRow}>
                        <TrendingPlayers trendingPlayers={TRENDING_PLAYERS}/>
                    </div>
                </div>
                <div className={classes.rightSection}>
                    <WatchlistContainer/>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(AppContent);