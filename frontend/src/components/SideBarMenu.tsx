import React from "react";
import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import {Divider, List, Theme} from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";
import ColorsPalette from "../assets/Colors";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TableChart from '@material-ui/icons/TableChart';
import SideBarButton from "./SideBarButton";

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
    height: "90%",
    width: "75%",
  },
  header: {
    color: ColorsPalette.white,
    fontWeight: "bold",
  },
  icon: {
    color: ColorsPalette.white
  }
});

function SideBarMenu(props: IProps) {
  const { classes } = props;

  const navigateToPage = () => {
    alert("Under construction")
  }

  return (
    <div className={classes.root}>
      <div className={classes.sideMenu}>
          <List>
            <SideBarButton action={navigateToPage} text={"Home"} icon={<HomeIcon className={classes.icon}/>}/>
            <Divider />
            <SideBarButton action={navigateToPage} text={"My Team"} icon={<PeopleAltIcon className={classes.icon}/>}/>
            <Divider />
            <SideBarButton action={navigateToPage} text={"My Leagues"} icon={<TableChart className={classes.icon}/>}/>
            <Divider />
            <SideBarButton action={navigateToPage} text={"Stats and updates"} icon={<InfoIcon className={classes.icon}/>}/>
            <Divider />
          </List>
      </div>
    </div>
  );
}

export default withStyles(styles)(SideBarMenu);
