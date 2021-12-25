import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Theme } from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";
import ItemsCarousel from "../../components/ItemsCarousel";
import CarouselPlayerViewItem from "./CarouselPlayerViewItem";

interface IProps {
    classes: any
}

const styles = (theme: Theme) => ({
    container: {
        marginTop: "3em"
    },
    header: {
        display: "flex",
        padding: "1em 0",
        borderBottom: "1px solid #979797",
        fontSize: 18,
        fontWeight: 800,
        marginBottom: "1em"
    },
});



function PlayersSliderContainer(props: IProps) {
    const { classes } = props

    const relatedPlayers: IPlayer[] =  [
        {
            "chance_of_playing_next_round": null,
            "chance_of_playing_this_round": null,
            "code": 80201,
            "cost_change_event": 0,
            "cost_change_event_fall": 0,
            "cost_change_start": -3,
            "cost_change_start_fall": 3,
            "dreamteam_count": 0,
            "element_type": 1,
            "ep_next": "0.5",
            "ep_this": "0.5",
            "event_points": 0,
            "first_name": "Bernd",
            "form": "0.0",
            "id": 1,
            "in_dreamteam": false,
            "news": "",
            "news_added": null,
            "now_cost": 47,
            "photo": "80201.jpg",
            "points_per_game": "1.3",
            "second_name": "Leno",
            "selected_by_percent": "1.2",
            "special": false,
            "squad_number": null,
            "status": "a",
            "team": 1,
            "team_code": 3,
            "total_points": 4,
            "transfers_in": 54486,
            "transfers_in_event": 62,
            "transfers_out": 148437,
            "transfers_out_event": 181,
            "value_form": "0.0",
            "value_season": "0.9",
            "web_name": "Leno",
            "minutes": 270,
            "goals_scored": 0,
            "assists": 0,
            "clean_sheets": 0,
            "goals_conceded": 9,
            "own_goals": 0,
            "penalties_saved": 0,
            "penalties_missed": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "saves": 9,
            "bonus": 0,
            "bps": 48,
            "influence": "79.0",
            "creativity": "0.0",
            "threat": "0.0",
            "ict_index": "7.9",
            "influence_rank": 172,
            "influence_rank_type": 20,
            "creativity_rank": 545,
            "creativity_rank_type": 55,
            "threat_rank": 528,
            "threat_rank_type": 52,
            "ict_index_rank": 287,
            "ict_index_rank_type": 20,
            "corners_and_indirect_freekicks_order": null,
            "corners_and_indirect_freekicks_text": "",
            "direct_freekicks_order": null,
            "direct_freekicks_text": "",
            "penalties_order": null,
            "penalties_text": ""
        },
        {
            "chance_of_playing_next_round": 0,
            "chance_of_playing_this_round": 0,
            "code": 115918,
            "cost_change_event": 0,
            "cost_change_event_fall": 0,
            "cost_change_start": 0,
            "cost_change_start_fall": 0,
            "dreamteam_count": 0,
            "element_type": 1,
            "ep_next": "0.0",
            "ep_this": "0.0",
            "event_points": 0,
            "first_name": "Rúnar Alex",
            "form": "0.0",
            "id": 25,
            "in_dreamteam": false,
            "news": "Joined OH Leuven on a season-long loan - Expected back 01 Jul",
            "news_added": "2021-08-31T22:00:09.069158Z",
            "now_cost": 40,
            "photo": "115918.jpg",
            "points_per_game": "0.0",
            "second_name": "Rúnarsson",
            "selected_by_percent": "0.9",
            "special": false,
            "squad_number": null,
            "status": "u",
            "team": 1,
            "team_code": 3,
            "total_points": 0,
            "transfers_in": 19017,
            "transfers_in_event": 0,
            "transfers_out": 54760,
            "transfers_out_event": 94,
            "value_form": "0.0",
            "value_season": "0.0",
            "web_name": "Rúnarsson",
            "minutes": 0,
            "goals_scored": 0,
            "assists": 0,
            "clean_sheets": 0,
            "goals_conceded": 0,
            "own_goals": 0,
            "penalties_saved": 0,
            "penalties_missed": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "saves": 0,
            "bonus": 0,
            "bps": 0,
            "influence": "0.0",
            "creativity": "0.0",
            "threat": "0.0",
            "ict_index": "0.0",
            "influence_rank": 419,
            "influence_rank_type": 37,
            "creativity_rank": 405,
            "creativity_rank_type": 18,
            "threat_rank": 363,
            "threat_rank_type": 14,
            "ict_index_rank": 425,
            "ict_index_rank_type": 37,
            "corners_and_indirect_freekicks_order": null,
            "corners_and_indirect_freekicks_text": "",
            "direct_freekicks_order": null,
            "direct_freekicks_text": "",
            "penalties_order": null,
            "penalties_text": ""
        },
        {
            "chance_of_playing_next_round": 100,
            "chance_of_playing_this_round": 100,
            "code": 90585,
            "cost_change_event": 0,
            "cost_change_event_fall": 0,
            "cost_change_start": -1,
            "cost_change_start_fall": 1,
            "dreamteam_count": 0,
            "element_type": 2,
            "ep_next": "0.0",
            "ep_this": "0.0",
            "event_points": 0,
            "first_name": "Willy",
            "form": "0.0",
            "id": 428,
            "in_dreamteam": false,
            "news": "",
            "news_added": "2021-08-09T18:30:12.373456Z",
            "now_cost": 49,
            "photo": "90585.jpg",
            "points_per_game": "0.0",
            "second_name": "Boly",
            "selected_by_percent": "0.1",
            "special": false,
            "squad_number": null,
            "status": "a",
            "team": 20,
            "team_code": 39,
            "total_points": 0,
            "transfers_in": 3418,
            "transfers_in_event": 17,
            "transfers_out": 6773,
            "transfers_out_event": 8,
            "value_form": "0.0",
            "value_season": "0.0",
            "web_name": "Boly",
            "minutes": 0,
            "goals_scored": 0,
            "assists": 0,
            "clean_sheets": 0,
            "goals_conceded": 0,
            "own_goals": 0,
            "penalties_saved": 0,
            "penalties_missed": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "saves": 0,
            "bonus": 0,
            "bps": 0,
            "influence": "0.0",
            "creativity": "0.0",
            "threat": "0.0",
            "ict_index": "0.0",
            "influence_rank": 561,
            "influence_rank_type": 202,
            "creativity_rank": 555,
            "creativity_rank_type": 202,
            "threat_rank": 542,
            "threat_rank_type": 201,
            "ict_index_rank": 564,
            "ict_index_rank_type": 202,
            "corners_and_indirect_freekicks_order": null,
            "corners_and_indirect_freekicks_text": "",
            "direct_freekicks_order": null,
            "direct_freekicks_text": "",
            "penalties_order": null,
            "penalties_text": ""
        },
        {
            "chance_of_playing_next_round": 75,
            "chance_of_playing_this_round": 75,
            "code": 122775,
            "cost_change_event": 0,
            "cost_change_event_fall": 0,
            "cost_change_start": 0,
            "cost_change_start_fall": 0,
            "dreamteam_count": 0,
            "element_type": 3,
            "ep_next": "-0.4",
            "ep_this": "0.0",
            "event_points": 0,
            "first_name": "Morgan",
            "form": "0.0",
            "id": 34,
            "in_dreamteam": false,
            "news": "Lack of match fitness - 75% chance of playing",
            "news_added": "2021-09-23T00:00:09.109242Z",
            "now_cost": 50,
            "photo": "122775.jpg",
            "points_per_game": "0.0",
            "second_name": "Sanson",
            "selected_by_percent": "0.0",
            "special": false,
            "squad_number": null,
            "status": "d",
            "team": 2,
            "team_code": 7,
            "total_points": 0,
            "transfers_in": 679,
            "transfers_in_event": 0,
            "transfers_out": 1199,
            "transfers_out_event": 3,
            "value_form": "0.0",
            "value_season": "0.0",
            "web_name": "Sanson",
            "minutes": 0,
            "goals_scored": 0,
            "assists": 0,
            "clean_sheets": 0,
            "goals_conceded": 0,
            "own_goals": 0,
            "penalties_saved": 0,
            "penalties_missed": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "saves": 0,
            "bonus": 0,
            "bps": 0,
            "influence": "0.0",
            "creativity": "0.0",
            "threat": "0.0",
            "ict_index": "0.0",
            "influence_rank": 574,
            "influence_rank_type": 229,
            "creativity_rank": 571,
            "creativity_rank_type": 232,
            "threat_rank": 559,
            "threat_rank_type": 227,
            "ict_index_rank": 577,
            "ict_index_rank_type": 230,
            "corners_and_indirect_freekicks_order": null,
            "corners_and_indirect_freekicks_text": "",
            "direct_freekicks_order": null,
            "direct_freekicks_text": "",
            "penalties_order": null,
            "penalties_text": ""
        },
        {
            "chance_of_playing_next_round": null,
            "chance_of_playing_this_round": null,
            "code": 154043,
            "cost_change_event": 0,
            "cost_change_event_fall": 0,
            "cost_change_start": -2,
            "cost_change_start_fall": 2,
            "dreamteam_count": 0,
            "element_type": 3,
            "ep_next": "1.3",
            "ep_this": "1.3",
            "event_points": 0,
            "first_name": "Ainsley",
            "form": "0.8",
            "id": 13,
            "in_dreamteam": false,
            "news": "",
            "news_added": null,
            "now_cost": 53,
            "photo": "154043.jpg",
            "points_per_game": "1.4",
            "second_name": "Maitland-Niles",
            "selected_by_percent": "0.1",
            "special": false,
            "squad_number": null,
            "status": "a",
            "team": 1,
            "team_code": 3,
            "total_points": 7,
            "transfers_in": 1726,
            "transfers_in_event": 8,
            "transfers_out": 5289,
            "transfers_out_event": 5,
            "value_form": "0.2",
            "value_season": "1.3",
            "web_name": "Maitland-Niles",
            "minutes": 119,
            "goals_scored": 0,
            "assists": 0,
            "clean_sheets": 1,
            "goals_conceded": 1,
            "own_goals": 0,
            "penalties_saved": 0,
            "penalties_missed": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "saves": 0,
            "bonus": 0,
            "bps": 21,
            "influence": "20.6",
            "creativity": "27.9",
            "threat": "8.0",
            "ict_index": "5.7",
            "influence_rank": 311,
            "influence_rank_type": 132,
            "creativity_rank": 217,
            "creativity_rank_type": 126,
            "threat_rank": 296,
            "threat_rank_type": 158,
            "ict_index_rank": 317,
            "ict_index_rank_type": 144,
            "corners_and_indirect_freekicks_order": null,
            "corners_and_indirect_freekicks_text": "",
            "direct_freekicks_order": null,
            "direct_freekicks_text": "",
            "penalties_order": null,
            "penalties_text": ""
        },
        {
            "chance_of_playing_next_round": null,
            "chance_of_playing_this_round": null,
            "code": 462635,
            "cost_change_event": 0,
            "cost_change_event_fall": 0,
            "cost_change_start": 0,
            "cost_change_start_fall": 0,
            "dreamteam_count": 0,
            "element_type": 4,
            "ep_next": "0.0",
            "ep_this": "0.0",
            "event_points": 0,
            "first_name": "Joe",
            "form": "0.0",
            "id": 577,
            "in_dreamteam": false,
            "news": "",
            "news_added": null,
            "now_cost": 45,
            "photo": "462635.jpg",
            "points_per_game": "0.0",
            "second_name": "Gelhardt",
            "selected_by_percent": "0.3",
            "special": false,
            "squad_number": null,
            "status": "a",
            "team": 10,
            "team_code": 2,
            "total_points": 0,
            "transfers_in": 39242,
            "transfers_in_event": 37,
            "transfers_out": 20261,
            "transfers_out_event": 51,
            "value_form": "0.0",
            "value_season": "0.0",
            "web_name": "Gelhardt",
            "minutes": 0,
            "goals_scored": 0,
            "assists": 0,
            "clean_sheets": 0,
            "goals_conceded": 0,
            "own_goals": 0,
            "penalties_saved": 0,
            "penalties_missed": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "saves": 0,
            "bonus": 0,
            "bps": 0,
            "influence": "0.0",
            "creativity": "0.0",
            "threat": "0.0",
            "ict_index": "0.0",
            "influence_rank": 542,
            "influence_rank_type": 68,
            "creativity_rank": 533,
            "creativity_rank_type": 69,
            "threat_rank": 513,
            "threat_rank_type": 65,
            "ict_index_rank": 545,
            "ict_index_rank_type": 70,
            "corners_and_indirect_freekicks_order": null,
            "corners_and_indirect_freekicks_text": "",
            "direct_freekicks_order": null,
            "direct_freekicks_text": "",
            "penalties_order": null,
            "penalties_text": ""
        },
        {
            "chance_of_playing_next_round": 75,
            "chance_of_playing_this_round": 75,
            "code": 81012,
            "cost_change_event": 0,
            "cost_change_event_fall": 0,
            "cost_change_start": -1,
            "cost_change_start_fall": 1,
            "dreamteam_count": 0,
            "element_type": 2,
            "ep_next": "0.4",
            "ep_this": "0.0",
            "event_points": 0,
            "first_name": "Ryan",
            "form": "0.0",
            "id": 415,
            "in_dreamteam": false,
            "news": "Groin Injury - 75% chance of playing",
            "news_added": "2021-09-23T00:00:09.752203Z",
            "now_cost": 44,
            "photo": "81012.jpg",
            "points_per_game": "1.0",
            "second_name": "Fredericks",
            "selected_by_percent": "0.1",
            "special": false,
            "squad_number": null,
            "status": "d",
            "team": 19,
            "team_code": 21,
            "total_points": 1,
            "transfers_in": 2882,
            "transfers_in_event": 1,
            "transfers_out": 8893,
            "transfers_out_event": 11,
            "value_form": "0.0",
            "value_season": "0.2",
            "web_name": "Fredericks",
            "minutes": 2,
            "goals_scored": 0,
            "assists": 0,
            "clean_sheets": 0,
            "goals_conceded": 0,
            "own_goals": 0,
            "penalties_saved": 0,
            "penalties_missed": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "saves": 0,
            "bonus": 0,
            "bps": 3,
            "influence": "0.0",
            "creativity": "0.0",
            "threat": "0.0",
            "ict_index": "0.0",
            "influence_rank": 464,
            "influence_rank_type": 176,
            "creativity_rank": 452,
            "creativity_rank_type": 178,
            "threat_rank": 419,
            "threat_rank_type": 167,
            "ict_index_rank": 469,
            "ict_index_rank_type": 177,
            "corners_and_indirect_freekicks_order": null,
            "corners_and_indirect_freekicks_text": "",
            "direct_freekicks_order": null,
            "direct_freekicks_text": "",
            "penalties_order": null,
            "penalties_text": ""
        },
        {
            "chance_of_playing_next_round": 0,
            "chance_of_playing_this_round": 0,
            "code": 222531,
            "cost_change_event": 0,
            "cost_change_event_fall": 0,
            "cost_change_start": 0,
            "cost_change_start_fall": 0,
            "dreamteam_count": 0,
            "element_type": 3,
            "ep_next": "0.0",
            "ep_this": "0.0",
            "event_points": 0,
            "first_name": "Morgan",
            "form": "0.0",
            "id": 440,
            "in_dreamteam": false,
            "news": "Joined Sheffield United on a season-long loan - Expected back 01 Jul",
            "news_added": "2021-08-31T22:00:09.739401Z",
            "now_cost": 45,
            "photo": "222531.jpg",
            "points_per_game": "0.5",
            "second_name": "Gibbs-White",
            "selected_by_percent": "0.2",
            "special": false,
            "squad_number": null,
            "status": "u",
            "team": 20,
            "team_code": 39,
            "total_points": 1,
            "transfers_in": 7872,
            "transfers_in_event": 0,
            "transfers_out": 30083,
            "transfers_out_event": 27,
            "value_form": "0.0",
            "value_season": "0.2",
            "web_name": "Gibbs-White",
            "minutes": 7,
            "goals_scored": 0,
            "assists": 0,
            "clean_sheets": 0,
            "goals_conceded": 0,
            "own_goals": 0,
            "penalties_saved": 0,
            "penalties_missed": 0,
            "yellow_cards": 1,
            "red_cards": 0,
            "saves": 0,
            "bonus": 0,
            "bps": 0,
            "influence": "0.0",
            "creativity": "0.7",
            "threat": "24.0",
            "ict_index": "2.1",
            "influence_rank": 519,
            "influence_rank_type": 200,
            "creativity_rank": 356,
            "creativity_rank_type": 178,
            "threat_rank": 227,
            "threat_rank_type": 121,
            "ict_index_rank": 358,
            "ict_index_rank_type": 164,
            "corners_and_indirect_freekicks_order": null,
            "corners_and_indirect_freekicks_text": "",
            "direct_freekicks_order": null,
            "direct_freekicks_text": "",
            "penalties_order": null,
            "penalties_text": ""
        },
    ]

    const renderRelatedPlayersView = () => {
        return relatedPlayers.map(player => <CarouselPlayerViewItem player={player}/>)
    }

    return (<div className={classes.container}>
        <div className={classes.header}>Related players</div>
        <ItemsCarousel items={renderRelatedPlayersView()}/>
    </div>)
}

export default withStyles(styles)(PlayersSliderContainer);