import {RequestHandler} from "express";

import {BootstrapStaticApiService} from "../services/bootstrapStaticApiService";
import {PlayerService} from "../services/playerService";
import {IStaticData} from "../shared/model/apiData/types";

const updatePlayersInfo: RequestHandler = async (req, res, next) => {
    try {
        const staticData: IStaticData = await BootstrapStaticApiService.getStaticData();
        await PlayerService.savePlayersData(staticData.elements);
        res.json({data: {ok: true}});
    } catch (err) {
        console.error(err)
    }
};

export default updatePlayersInfo;
