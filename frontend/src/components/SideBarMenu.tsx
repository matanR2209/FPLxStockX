import React from "react";
import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";
import ColorsPalette from "../assets/Colors";

interface IProps {
  classes: any;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
  root: {
    width: "20%",
    backgroundColor: ColorsPalette.sideBarContainerBackground,
    display: "flex",
    justifyContent: "end",
  },
  sideMenu: {
    color: ColorsPalette.white,
    backgroundColor: ColorsPalette.sideBarContentBackground,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    margin: "auto 0",
    padding: "2em",
    height: "80%",
    width: "50%",
  },
  header: {
    color: ColorsPalette.white,
    fontWeight: "bold",
  },
  onBoardingHighlight: {
    zIndex: 11,
    backgroundColor: ColorsPalette.white,
  },
});

function SideBarMenu(props: IProps) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.sideMenu}>
        <div className={classes.header}>User actions Side menu</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(SideBarMenu);
