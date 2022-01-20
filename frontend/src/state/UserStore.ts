import { computed, observable } from "mobx";
import {IUser} from "shared/user/types";


export default class UserStore {
  @observable private _user: IUser | undefined;

  set user(user: IUser) {
    this._user = user;
  }

  public getUser() {
    return this._user ? this._user : undefined;
  }

  @computed
  get userWatchlist() {
    return this._user?.watchlist;
  }
}
