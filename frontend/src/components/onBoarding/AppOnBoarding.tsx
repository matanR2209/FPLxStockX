import React from "react";
import {Button, StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IOnBoardingInfo} from "../../shared/model/general/types";
import ColorsPalette from "../../assets/Colors";
import {stores} from "../../state";
import {OnBoardingStage} from "../../shared/model/general/enums";

interface IProps {
    classes: any;
    onBoardingInfo: IOnBoardingInfo
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    onBoardingContainer: {
            zIndex: 10,
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(14,32,56,.8)"
    },
    onBoardingDialog: {
        borderRadius: 10,
        padding: "1em",
        zIndex: 11,
        backgroundColor: ColorsPalette.white,
        position: "absolute"
    },
    onBoardingTitle: {
        fontWeight: 600,
        fontSize: 22,
        marginBottom: "1em"
    },
    onBoardingBody: {

    },
    onBoardingFooter: {
        marginTop: "1em",
        paddingTop: "1em",
        borderTop: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonContainer: {
        marginLeft: "1em"
    },
    footerLeftSection: {},
    footerRightSection: {
        display: "flex",
        flexDirection: "row",
    }
});

const onBoardingSore = stores.onBoardingStore;

function AppOnBoarding(props: IProps) {
    const { classes, onBoardingInfo } = props;

    const next = () => {
        onBoardingSore.setNextOnBoardingStage();
    }

    const prev = () => {
        onBoardingSore.setPreviousOnBoardingStage();
    }

    const skip = () => {
        onBoardingSore.isOnBoardingActive = false;
    }

    const renderDialogFooter = () => {
        return (<div className={classes.onBoardingFooter}>
            <div className={classes.footerLeftSection}>
                <Button variant="outlined" color={"primary"} onClick={skip}>Skip</Button>
            </div>
            <div className={classes.footerRightSection}>
                <div className={classes.buttonContainer}><Button variant="contained" color={"primary"} onClick={prev}>Prev</Button></div>
                <div className={classes.buttonContainer}><Button variant="contained" color={"primary"} onClick={next}>
                    {onBoardingSore.onBoardingStage === OnBoardingStage.ActionsMenu? "Lets Go" : "Next"}
                </Button></div>
            </div>
        </div>)
    }

    return (<div className={classes.onBoardingContainer}>
                <div className={classes.onBoardingDialog} style={{left: onBoardingInfo.leftPosition, top: onBoardingInfo.topPosition}}>
                    <div className={classes.onBoardingTitle}>{onBoardingInfo.titleText}</div>
                    <div className={classes.onBoardingBody}>{onBoardingInfo.bodyText}</div>
                    {renderDialogFooter()}
                </div>
        </div>)
}

export default withStyles(styles)(AppOnBoarding);
