import * as express from "express";
import getUserData from "../controllers/user/getUserData";

const userRouter = express.Router({mergeParams: true});

userRouter.route("/:userId" ).get(getUserData);

export default userRouter;