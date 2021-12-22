import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import SideBarMenu from "./components/SideBarMenu";
import AppContent from "./views/AppContent/AppContent";

interface IProps {
    classes: any;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    appContainer: {
        backgroundColor: "#f6f6f6",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "hidden"

    },
    topSectionContainer: {
        display: "flex",
        flexDirection: "row",
    },
    container: {
        fontFamily: "'Montserrat', sans-serif",
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100%"
    }
});

function App(props: IProps) {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <SideBarMenu></SideBarMenu>
            <AppContent/>
        </div>
  );
}

export default withStyles(styles)(App);
