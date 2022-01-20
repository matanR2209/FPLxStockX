import React from "react";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    StyleRulesCallback,
    Theme,
    withStyles
} from "@material-ui/core";

interface IProps {
    classes: any;
    action: () => void;
    text: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({});

function SideBarButton(props: IProps) {
    const { action, text, icon } = props
    return   (<ListItem button onClick={action}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
    </ListItem>)
}

export default withStyles(styles)(SideBarButton);
