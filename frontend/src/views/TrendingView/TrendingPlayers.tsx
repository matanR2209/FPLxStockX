import React, {useEffect} from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import TrendingPlayerRow from "./TrendingPlayerRow";
import ColorsPalette from "../../assets/Colors";
import PlayerDataApiService from "../../services/API/PlayerDataApiService";
import Loader from "../../components/Loader";
import {IPlayer} from "../../shared/model/player/types";
import {OnBoardingStage} from "../../shared/model/general/enums";
import {stores} from "../../state";
import {Observer} from "mobx-react";

interface IProps {
    classes: any
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "inherit",
        width: "50%"
    },
    header: {
        fontWeight: "bold",
        color: ColorsPalette.darkBlue,
        fontSize: 20,
        margin: ".5em 0"
    },
    trendingListContainer: {
        backgroundColor: "white",
        overflowY: "scroll",
        height: "27%",
        position:"relative",
        overflow:"hidden",
    },
    trendingList: {
        top:0,
        position:"absolute",
        width: "100%"
    },
    onBoardingHighlight: {
        zIndex: 11,
        padding: ".5em",
        backgroundColor: ColorsPalette.white
    }
});

const onBoardingStore = stores.onBoardingStore;

function TrendingPlayers(props: IProps) {
    const { classes } = props;
    const [trendingPlayers, setTrendingPlayers] = React.useState<IPlayer[]>([]);

    useEffect(() => {
        (async () => {
            const response = await PlayerDataApiService.getTrendingPlayers();
            if(response.ok && response.data) {
                setTrendingPlayers(response.data);
            }

        })()
    }, []);

    const renderTrendingPlayers = () => {
        return (<div className={classes.trendingListContainer}>
                    {trendingPlayers.map(player => <TrendingPlayerRow key={player.id} trendingPlayer={player}/> )}
            </div>
        )
    }

    return (<Observer>
        {() => {return (<div className={`${classes.root} ${onBoardingStore.isOnComponentHighlighted(OnBoardingStage.Trending)? classes.onBoardingHighlight: {}} `}>
            <div className={classes.header}>Trending</div>
            {trendingPlayers.length > 0? renderTrendingPlayers() :<Loader/> }
        </div>)}}
    </Observer>)
}

export default withStyles(styles)(TrendingPlayers);