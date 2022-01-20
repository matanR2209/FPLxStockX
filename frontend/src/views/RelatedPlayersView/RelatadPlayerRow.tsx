import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IPlayer} from "../../shared/model/player/types";
import Utils from "../../Utils/Utils";


interface IProps {
    classes: any
    relatedPlayer: IPlayer
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    playerRowContainer: {
        margin: "1em",
        padding: ".5em",
        borderBottom: "2px solid #F6F6F6",
        display: "flex",
        justifyContent: "space-between",
    },
    relatedPlayerLeftSection: {
        display: "flex",
        flexDirection: "row"
    },
    relatedPlayerBio: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "1em",
        justifyContent: "space-around"
    },
    relatedPlayerRightSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }
});

function RelatedPlayerRowRow(props: IProps) {
    const { classes, relatedPlayer } = props;

    return (
        <div className={classes.playerRowContainer}>
            <div className={classes.relatedPlayerLeftSection}>
                <div>
                    <img alt={relatedPlayer.web_name} style={{height: "3em"}} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${relatedPlayer.code}.png`}/>
                </div>
                <div className={classes.relatedPlayerBio}>
                    <div>{`${relatedPlayer.first_name} ${relatedPlayer.second_name}`}</div>
                    <div>{`Position: ${Utils.getPlayerPositionName(relatedPlayer.element_type)}`}</div>
                </div>
            </div>
            <div className={classes.relatedPlayerRightSection}>
                <div>{`Form: ${relatedPlayer.form}`}</div>
                <div>{`PPG: ${relatedPlayer.points_per_game}`} </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(RelatedPlayerRowRow);