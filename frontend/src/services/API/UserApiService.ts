import {NetworkService} from "../NetworkService";

export default class UserApiService {
    private static get basePath() {
        return `http://localhost:3001`;
    }

    public static getUserInfo = async (userId: string) => {
        const url = `${UserApiService.basePath}/user/${userId}`;
        return NetworkService.get(url)
    }
}