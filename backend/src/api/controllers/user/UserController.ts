import {RequestHandler} from "express";
import {IUser} from "../../../shared/model/user/types";
import {UserService} from "../../../services/UserService";

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