import * as express from "express";
import UserController from "../controllers/user/UserController";
import {UserApiEndpoints} from "../../shared/model/network/enums";

const userRouter = express.Router({mergeParams: true});

userRouter.route("/:userId" ).get(UserController.getUserData);

userRouter.route(UserApiEndpoints.AddToWatchlist).post(UserController.AddPlayerToWatchlist);

export default userRouter;