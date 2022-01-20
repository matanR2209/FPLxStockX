import {IPlayer} from "../player/types";

export interface IUser {
    name: string,
    email: string,
    id: string,
    currentTeam: IPlayer[];
    watchlist: IPlayer[];
    favoriteTeam: number
}