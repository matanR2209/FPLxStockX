import {action, computed, observable} from "mobx";
import {IUser} from "../../../shared/model/user/types";

export default class UserStore {
    @observable private _user: IUser | undefined;

    set user(user: IUser) {
        console.log(user);
        this._user = user;
    }

    @computed
    get userWatchlist() {
        return this._user?.watchlist;
    }
}
