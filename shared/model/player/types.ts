export interface IPlayer {
    "chance_of_playing_next_round":any,
    "chance_of_playing_this_round":any,
    "code": number,
    "cost_change_event": number,
    "cost_change_event_fall": number,
    "cost_change_start": number,
    "cost_change_start_fall": number,
    "dreamteam_count": number,
    "element_type": number,
    "ep_next": string,
    "ep_this": string,
    "event_points": number,
    "first_name": string,
    "form": string,
    "id": number,
    "in_dreamteam":boolean,
    "news": string,
    "news_added": any,
    "now_cost": number,
    "photo": string,
    "points_per_game": string,
    "second_name": string,
    "selected_by_percent": string,
    "special":boolean,
    "squad_number":any,
    "status": string,
    "team": number,
    "team_code": number,
    "total_points": number,
    "transfers_in": number,
    "transfers_in_event": number,
    "transfers_out": number,
    "transfers_out_event": number,
    "value_form": string,
    "value_season": string,
    "web_name": string,
    "minutes": number,
    "goals_scored": number,
    "assists": number,
    "clean_sheets": number,
    "goals_conceded": number,
    "own_goals": number,
    "penalties_saved": number,
    "penalties_missed": number,
    "yellow_cards": number,
    "red_cards": number,
    "saves": number,
    "bonus": number,
    "bps": number,
    "influence": string,
    "creativity": string,
    "threat": string,
    "ict_index": string,
    "influence_rank": number,
    "influence_rank_type": number,
    "creativity_rank": number,
    "creativity_rank_type": number,
    "threat_rank": number,
    "threat_rank_type": number,
    "ict_index_rank": number,
    "ict_index_rank_type": number,
    "corners_and_indirect_freekicks_order": any,
    "corners_and_indirect_freekicks_text": string,
    "direct_freekicks_order":any,
    "direct_freekicks_text": string,
    "penalties_order":any,
    "penalties_text": string,
}

export interface IPlayerStatsHistory {
    points: IStatsHistory[],
    transferIn: IStatsHistory[],
    transferOut: IStatsHistory[]
}

export interface IStatsHistory {
    amount: number,
    date: number
}

export interface IPlayerStats {
    id: number;
    currentPrice: number;
    currentOwnership: number;
    ownersHistory: IOwnerHistory[];
    currentPointsCount: number
    pointsCountHistory: IPointHistory
}

export interface IOwnerHistory {
    date: Date;
    owners: number;
    gameweek: any // todo - create gameweek interface
}

export interface IPointHistory {
    gameweek: any // todo - create gameweek interface
    pointsPerGameweek: number;
    totalPoints: number;
}