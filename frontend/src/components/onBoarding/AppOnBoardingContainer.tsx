import React from "react";
import {Observer} from "mobx-react";
import {stores} from "../../state";
import {IOnBoardingInfo} from "../../shared/model/general/types";
import {OnBoardingStage} from "../../shared/model/general/enums";
import AppOnBoarding from "./AppOnBoarding";

interface IProps {}

const DIALOG_TITLES = {
    welcome: "Welcome to FPLxStocks",
    playerControl: "Player control",
    playerView: "Player view",
    playerTrendGraph: "Player trend graph",
    trending: "Trending players",
    related: "Related players",
    watchlist: "watchlist",
    actions: "User actions menu"
}

const DIALOG_BODY_TEXTS = {
    welcome: "Welcome to FPLxStocks, blah blah blah",
    playerControl: "Here you can select new player to view his latest states. first, select a team, then select the specific player from that team",
    playerView: "On this section, you Will find the selected player latest stats - both FPL and real live stats",
    playerTrendGraph: "Get the latest trend regarding the selected players - what other PL mangers think of him, and how its reflacted on his transfer in/out",
    trending: "The hottest players in the FPL at the moment - see other managers trends, who are the most transferred in players this week",
    related: "Related players - players that may be good alternative for the selected player - based on their price, role, and performance",
    watchlist: "User watchlist, players that he follows to see their trends, and act if he sees something unusual",
    actions: "Available actions to the current logged user"
}

const onBoardingSore = stores.onBoardingStore;

function AppOnBoardingContainer(props: IProps) {
    const onBoardingWelcome: IOnBoardingInfo = {
        leftPosition: "50%",
        topPosition: "25%",
        titleText: DIALOG_TITLES.welcome,
        bodyText: DIALOG_BODY_TEXTS.welcome
    }

    const onBoardingPlayerControl: IOnBoardingInfo = {
        leftPosition: "20%",
        topPosition: "20%",
        titleText: DIALOG_TITLES.playerControl,
        bodyText: DIALOG_BODY_TEXTS.playerControl
    }

    const onBoardingPlayerView: IOnBoardingInfo = {
        leftPosition: "45%",
        topPosition: "30%",
        titleText: DIALOG_TITLES.playerView,
        bodyText: DIALOG_BODY_TEXTS.playerView
    }

    const onBoardingPlayerTrendGraph: IOnBoardingInfo = {
        leftPosition: "30%",
        topPosition: "65%",
        titleText: DIALOG_TITLES.playerTrendGraph,
        bodyText: DIALOG_BODY_TEXTS.playerTrendGraph
    }

    const onBoardingTrending: IOnBoardingInfo = {
        leftPosition: "20%",
        topPosition: "40%",
        titleText: DIALOG_TITLES.trending,
        bodyText: DIALOG_BODY_TEXTS.trending
    }

    const onBoardingRelated: IOnBoardingInfo = {
        leftPosition: "40%",
        topPosition: "40%",
        titleText: DIALOG_TITLES.related,
        bodyText: DIALOG_BODY_TEXTS.related
    }

    const onBoardingWatchlist: IOnBoardingInfo = {
        leftPosition: "35%",
        topPosition: "25%",
        titleText: DIALOG_TITLES.watchlist,
        bodyText: DIALOG_BODY_TEXTS.watchlist
    }

    const onBoardingActionsMenu: IOnBoardingInfo = {
        leftPosition: "20%",
        topPosition: "25%",
        titleText: DIALOG_TITLES.actions,
        bodyText: DIALOG_BODY_TEXTS.actions
    }

    const getOnBoardingInfo = (): IOnBoardingInfo => {
        switch (onBoardingSore.onBoardingStage){
            case OnBoardingStage.Welcome: return onBoardingWelcome
            case OnBoardingStage.PlayerControl: return onBoardingPlayerControl
            case OnBoardingStage.PlayerView: return onBoardingPlayerView
            case OnBoardingStage.PlayerGraphTrend: return onBoardingPlayerTrendGraph
            case OnBoardingStage.Trending: return onBoardingTrending
            case OnBoardingStage.Related: return onBoardingRelated
            case OnBoardingStage.Watchlist: return onBoardingWatchlist
            case OnBoardingStage.ActionsMenu: return onBoardingActionsMenu
            default: return onBoardingWelcome
        }
    }

    return (<Observer>
            {() => {return (<AppOnBoarding onBoardingInfo={getOnBoardingInfo()}/>)}}
        </Observer>
    );

}

export default AppOnBoardingContainer;
