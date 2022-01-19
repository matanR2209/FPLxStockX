import React from "react";
import { StyleRulesCallback, Theme, withStyles } from "@material-ui/core";
import ColorsPalette from "../assets/Colors";

interface IProps {
  classes: any;
  dataKey: string;
  dataValue: string;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
  section: {
    marginBottom: "1em",
  },
  dataHeader: {
    fontSize: 14,
    color: ColorsPalette.black,
  },
  sectionData: {
    fontSize: 22,
    fontWeight: 600,
  },
});

function PlayerInfoDataRow(props: IProps) {
  const { classes, dataKey, dataValue } = props;

  return (
    <div className={classes.section}>
      <div className={classes.dataHeader}>{dataKey}</div>
      <div className={classes.sectionData}>{dataValue}</div>
    </div>
  );
}

export default withStyles(styles)(PlayerInfoDataRow);
