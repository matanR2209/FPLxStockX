import {IStatsHistory} from "../shared/model/player/types";


export default class Utils {
    public static generateRandomHistoryStats = (): IStatsHistory[] => {
        const res:  IStatsHistory[] = [];
        let now = new Date();
        for(let i = 0; i < 10; i++) {
            res.push({
                amount: Math.floor(Math.random() * (10000 - 1000) + 1000),
                date: now.setDate(now.getDate() + i * 7)
            })
        }
        return res
    }
}