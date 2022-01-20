import {action, computed, observable} from "mobx";
import {OnBoardingStage} from "../shared/model/general/enums";

export default class OnBoardingStore {
    @observable private _onBoardingStage: OnBoardingStage = OnBoardingStage.Watchlist;
    @observable private _isOnBoardingActive: boolean = true;

    get onBoardingStage() {
        return this._onBoardingStage;
    }

    get isOnBoardingActive() {
        return this._isOnBoardingActive;
    }

    public isOnComponentHighlighted(stage: OnBoardingStage) {
        return this._onBoardingStage === stage;
    }

    set isOnBoardingActive(isOnBoardingActive: boolean) {
        this._isOnBoardingActive = isOnBoardingActive;
    }

    @action
    setNextOnBoardingStage() {
        if(this.onBoardingStage === OnBoardingStage.ActionsMenu) {
            this.isOnBoardingActive = false
        }else {
            this._onBoardingStage++
        }

    }

    @action
    setPreviousOnBoardingStage() {
        this._onBoardingStage--
    }
}
