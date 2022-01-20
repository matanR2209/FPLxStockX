import React from "react";
import {withStyles} from "@material-ui/core/styles";
import { Theme} from "@material-ui/core";
import ColorsPalette from "../../assets/Colors";
import {IPlayer} from "../../shared/model/player/types";

interface IProps {
    classes: any
    player: IPlayer
}

const styles = (theme: Theme) => ({
    root: {
        padding: "1em",
        borderRadius: 5,
        boxShadow: "0 1px 2px 0 rgba(226, 230, 236, 0.5)",
        backgroundColor: ColorsPalette.white,
        margin: "auto 1em",
        color: ColorsPalette.darkGrey,
        cursor: "pointer",
        "&:hover": {
            transform: "scale(0.8)",
            transition: "1s ease"
        }
    },
    imgContainer: {
        display: "flex",
        justifyContent: "center"
    },
    playerName: {
        fontSize: 20,
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        marginTop: "1em",
    },
    playerTeam: {
        fontSize: 18,
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
        marginTop: ".5em",
    },
    playerDataRow: {
        padding: "1em 0",
        borderBottom: "1px solid #f6f6f6",
        display: "flex",
        justifyContent: "space-between"
    },
    playerDataHeader: {
        fontWeight: 600
    },
});


function CarouselPlayerViewItem(props: IProps) {
    const { classes, player } = props;
    return (
        <div className={classes.root}>
            <div className={classes.imgContainer}>
                <img
                    style={{height: "4em", width: "4em", borderRadius: "50%"}}
                    alt={player.web_name} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}/>
            </div>
            <div className={classes.playerName}>{player.web_name}</div>
            <div className={classes.playerTeam}>Team</div>
            <div className={classes.generalInfo}>
                <div className={classes.playerDataRow}>
                    <div className={classes.playerDataHeader}>Total points</div>
                    <div>{player.total_points}</div>
                </div>
                <div className={classes.playerDataRow}>
                    <div className={classes.playerDataHeader}>Last GW points</div>
                    <div>{player.event_points}</div>
                </div>
                <div className={classes.playerDataRow}>
                    <div className={classes.playerDataHeader}>Form</div>
                    <div>{player.form}</div>
                </div>
                <div className={classes.playerDataRow}>
                    <div className={classes.playerDataHeader}>Transfer in</div>
                    <div>{player.transfers_in_event}</div>
                </div>
            </div>

        </div>
    );
}

export default withStyles(styles)(CarouselPlayerViewItem);