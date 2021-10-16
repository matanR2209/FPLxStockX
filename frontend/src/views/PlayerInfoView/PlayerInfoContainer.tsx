import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Theme } from "@material-ui/core";
import {IPlayer} from "../../../../shared/model/player/types";
import PlayerInfoView from "./PlayerInfoView";

interface IProps {
    classes: any
}

interface ILocalState {
    selectedPlayer: IPlayer;
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




class PlayerInfoContainer extends React.Component<IProps> {
    public state: ILocalState = {
        selectedPlayer: {
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
        }
    }

    public render() {
        return <PlayerInfoView player={this.state.selectedPlayer}/>
    }
}

export default withStyles(styles)(PlayerInfoContainer);