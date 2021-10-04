import {NetworkService} from "./NetworkService";
import {IStaticData} from "../../../shared/model/apiData/types";

const API_URL = "https://fantasy.premierleague.com/api/bootstrap-static/"

export class BootstrapStaticApiService {

    public static getStaticData =  async () => {
        const response = await  NetworkService.get(API_URL, undefined, {
                'User-Agent': '*'
            });
        return response.data as IStaticData
    }
}