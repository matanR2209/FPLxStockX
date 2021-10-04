import {IPlayer} from "../../../shared/model/player/types";
import * as admin from "firebase-admin";
import {firestore} from "../firestore/firestore";

export class PlayerService {
    public static savePlayersData = async (players: IPlayer[]) => {
        players.forEach( (player: IPlayer) => {
            PlayerService.savePlayersBasicInfo(player);
            PlayerService.updatePlayerTransfersStatistics(player);

        });
    }

    public static getPlayerInfo = async (playerId: string) => {
        const playerRef = firestore.collection('playersStatistics').doc(playerId);
        const snap = await playerRef.get();
        return snap.data();
    }

    private static savePlayersBasicInfo = (player: IPlayer) => {
        const playerRef = firestore.collection('players').doc(player.id.toString());
        playerRef.set(player);
    }

    private static updatePlayerTransfersStatistics = (player: IPlayer) => {
        const FieldValue = admin.firestore.FieldValue;
        const playerStatisticRef = firestore.collection('playersStatistics').doc(player.id.toString());
        const date: number = new Date().getTime();
        const transferInAtUpdate = {
            date,
            amount: player.transfers_in_event
        }
        const transferOutAtUpdate = {
            date,
            amount: player.transfers_out_event
        }
        const pointsAtUpdate = {
            date,
            amount: player.total_points
        }
        playerStatisticRef.update({
            transferIn: FieldValue.arrayUnion(transferInAtUpdate),
            transferOut: FieldValue.arrayUnion(transferOutAtUpdate),
            points: FieldValue.arrayUnion(pointsAtUpdate)
        });
    }
}