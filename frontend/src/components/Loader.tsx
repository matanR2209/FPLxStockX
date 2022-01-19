import React from "react";
import { StyleRulesCallback, Theme, withStyles } from "@material-ui/core";
import { TailSpin } from "react-loader-spinner";

import ColorsPalette from "../assets/Colors";

interface IProps {
  classes: any;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({});

function Loader(props: IProps) {
  return <TailSpin color={ColorsPalette.darkBlue} />;
}

export default withStyles(styles)(Loader);
