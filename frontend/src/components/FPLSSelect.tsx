import {
    MenuItem,
    StyleRulesCallback,
    TextField,
    Theme,
    WithStyles,
    withStyles
} from "@material-ui/core";
import * as React from "react";

interface IProps {
    classes: any;
    value: string;
    onChange: (change: string ) => void;
    items: any[];
}

const styles: StyleRulesCallback<Theme, {}> = (theme: Theme) => ({
    error: {
        fontSize: 14,
        fontWeight: 500
    },
    textFiledInput: {
        padding: 8,
        backgroundColor: "#FFF",
        fontWeight: 500,
        boxShadow: "0 0 0 0 #e4e6eb",
        "& .MuiSelect-select:focus": {
            backgroundColor: "#FFF"
        }
    },
    textFieldInput: {
        marginLeft: "1em"
    },
    icon: {
        marginRight: "1em",
        borderLeft: `1px solid #000`
    },
});

function FPLSSelect(props: IProps){
    const { classes, value, items, onChange} = props;

    const handleChange = (event: any) => {
        onChange(event.target.value)
    }

    return (
        <>
            <TextField
                fullWidth={true}
                select={true}
                value={value}
                onChange={handleChange}
                className={classes.textFiledInput}
                SelectProps={{
                    classes: { icon: classes.icon }
                }}
                InputProps={{
                    disableUnderline: true,
                    className: classes.textFieldInput
                }}
            >
                {items.map(option => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                    >
                        {option.displayString}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );

}

export default withStyles(styles)(FPLSSelect);
