import {RequestHandler} from "express";
import {IUser} from "../../../shared/model/user/types";
import {IPlayer} from "../../../shared/model/player/types";
import {UserService} from "../../../services/UserService";

const getUserData: RequestHandler = async (req, res, next) => {
    try {

        const user: IUser = {
            name: "test user",
            email: "test@user.com",
            currentTeam: await UserService.getUserCurrentTeam(),
            watchlist:  await UserService.getUserWatchlist(),
            favoriteTeam: 5
        }
        res.json({ok: true, data: user});
    } catch (e) {
        console.log(e);
    }
}

export default getUserData;