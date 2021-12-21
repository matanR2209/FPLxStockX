import React from "react";
import {StyleRulesCallback, withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import SideBarMenu from "./components/SideBarMenu";
import AppContentContainer from "./views/AppContent/AppContentContainer";

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
            <AppContentContainer/>
        </div>
    // <div className={classes.appContainer} >
    //     <div className={classes.topSectionContainer}>
    //
    //         <div className={classes.searchArea}>
    //             <SearchAreaContainer/>
    //         </div>
    //     </div>
    //
    //     >
    //     <RelatedPlayersSliderContainer/>
    // </div>
  );
}

export default withStyles(styles)(App);
