import {NetworkService} from "../NetworkService";
import {IAddPlayerToWatchlistRequestBody} from "../../shared/model/network/types";
import {ApiEndpoints, UserApiEndpoints} from "../../shared/model/network/enums";

export default class UserApiService {
    private static get basePath() {
        return `http://localhost:3001`;
    }

    public static getUserInfo = async (userId: string) => {
        const url = `${UserApiService.basePath}${ApiEndpoints.User}/${userId}`;
        return NetworkService.get(url)
    }

    public static addPlayerToWatchlist = async (userId: string, playerId: number) => {
        const params: IAddPlayerToWatchlistRequestBody = {
            userId,
            playerId
        }
        const url = `${UserApiService.basePath}${ApiEndpoints.User}${UserApiEndpoints.AddToWatchlist}`;
        return NetworkService.post(url, params)
    }
}