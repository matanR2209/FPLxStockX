import PlayerDataApiService from "../services/API/PlayerDataApiService";
import {observable} from "mobx";
import {IPlayerStatsHistory, IStatsHistory} from "../../../shared/model/player/types";

export default class PlayerDataStore {
    @observable public playerTrendingStats: IPlayerStatsHistory | undefined = {
        points: [{
            amount: 10,
            date: 1242
        },
            {
                amount: 20,
                date: 1542
            },
            {
                amount: 40,
                date: 1742
            }
        ],
        transferIn:  [{
            amount: 15,
            date: 1242
        },
            {
                amount: 10,
                date: 1542
            },
            {
                amount: 25,
                date: 1742
            }
        ],
        transferOut:  [{
            amount: 8,
            date: 1242
        },
            {
                amount: 6,
                date: 1542
            },
            {
                amount: 2,
                date: 1742
            }
        ]
    };

    public getPlayerStats = async (playerId: string) => {
        this.playerTrendingStats = undefined;
        const response = await PlayerDataApiService.getPlayerStats(playerId);
        if(response.data && response.status === 200) {
            this.playerTrendingStats = response.data;
            console.log(this.playerTrendingStats);
        }
    }
}
