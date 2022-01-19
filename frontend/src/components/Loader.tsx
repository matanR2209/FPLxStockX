import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";

interface IProps {
    classes: any;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({});


function Loader(props: IProps) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            Loader
        </div>
    );
}

export default withStyles(styles)(Loader);