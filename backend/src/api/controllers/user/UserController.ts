import {RequestHandler} from "express";
import {UserService} from "../../../services/UserService";
import {IUser} from "../../../../../shared/src/user/types";

export default class UserController {
    public static getUserData: RequestHandler = async (req, res, next) => {
        try {
            const user: IUser = {
                name: "test user",
                email: "test@user.com",
                id: "testId",
                currentTeam: await UserService.getUserCurrentTeam(),
                watchlist:  await UserService.getUserWatchlist(),
                favoriteTeam: 5
            }
            res.json({ok: true, data: user});
        } catch (e) {
            console.log(e);
        }
    }

    public static AddPlayerToWatchlist: RequestHandler = async (req, res, next) => {
        try {
            UserService.addUserToWatchlist("userId", 2);
            res.json({ok: true});
        } catch (e) {
            console.log(e);
        }
    }
}