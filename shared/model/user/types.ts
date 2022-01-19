import {IPlayer} from "../player/types";
import {ITeam} from "../team/types";

export interface IUser {
    name: string,
    email: string,
    currentTeam: IPlayer[];
    watchlist: IPlayer[];
    favoriteTeam: ITeam
}