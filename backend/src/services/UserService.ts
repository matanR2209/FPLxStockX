import * as _ from "lodash";
import {BootstrapStaticApiService} from "./bootstrapStaticApiService";


export class UserService {

    public static getUserCurrentTeam = async () => {
        const response = await BootstrapStaticApiService.getStaticData();
        return _.sampleSize(response.elements, 15)
    }

    public static getUserWatchlist = async () => {
        const response = await BootstrapStaticApiService.getStaticData();
        return _.sampleSize(response.elements, 12)
    }

    public static addUserToWatchlist = async (userId: string, playerId: number) => {
        console.log(`Adding ${playerId} to ${userId} watchlist`)
        return true;
    }
}