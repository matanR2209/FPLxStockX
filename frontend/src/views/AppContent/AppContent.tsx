import React, {useEffect} from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import ColorsPalette from "../../assets/Colors";
import WatchlistContainer from "../WatchlistView/WatchlistContainer";
import TrendingPlayers from "../TrendingView/TrendingPlayers";
import PlayerInfoView from "../PlayerInfoView/PlayerInfoView";
import PlayerSelectionControl from "../PlayerSelectionControl/PlayerSelectionControl";
import MainTrendGraphView from "../GraphView/MainTrendGraphView";
import RelatedPlayers from "../RelatedPlayersView/RelatedPlayers";
import UserApiService from "../../services/API/UserApiService";
import {stores} from "../../state";


interface IProps {
    classes: any;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    container: {
        backgroundColor: ColorsPalette.containerBackground,
        display: "flex",
        width: "inherit",
        overflowX: "hidden",
        overflowY: "hidden"
    },
    content: {
        backgroundColor: ColorsPalette.contentBackground,
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
        width: "80%"
    },
    leftSectionTopRow: {
        display: "flex",
        flexDirection: "row",
    },
    leftSectionBottomRow: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    rightSection: {
        width: "20%",
    }
});

const userStore = stores.userStore;

function AppContent(props: IProps) {
    const { classes } = props;

    useEffect(() => {
        (async () => {
            const response = await UserApiService.getUserInfo("testId");
            if(response.ok) {
                userStore.user = response.data;
            } else {
                console.error("Whhhhos, somthing went wrong");
            }


        })()
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.leftSection}>
                    <PlayerSelectionControl/>
                    <div className={classes.leftSectionTopRow}>
                        <PlayerInfoView />
                        <MainTrendGraphView/>
                    </div>
                    <div className={classes.leftSectionBottomRow}>
                        <TrendingPlayers/>
                        <RelatedPlayers/>
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