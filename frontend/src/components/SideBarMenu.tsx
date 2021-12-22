import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";

interface IProps {
    classes: any;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    container: {
        width: "20%",
        backgroundColor: "#EBEDFF",
        display: "flex",
        justifyContent: "end"
    },
    sideMenu: {
        color: "#FFF",
        backgroundColor: "#3947B2",
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        margin: "auto 0",
        padding: "2em",
        height: "80%",
        width: "50%"
    },
    header: {
        fontWeight: "bold"
    }
});

function SideBarMenu(props: IProps) {
    const {classes} = props;

    return (
        <div className={classes.container}>
            <div className={classes.sideMenu}>
                <div className={classes.header}>TODO: Side menu</div>
            </div>
        </div>
    );
}

export default withStyles(styles)(SideBarMenu);