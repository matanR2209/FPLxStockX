import * as React from "react";
import {Button, TextField, Theme} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Graph from "./Graph";
import {stores} from "../../state";
import {FPLSResponse} from "../../shared/network";
import {IPlayerStatsHistory} from "../../../../shared/model/player/types";


interface IProps {
    classes: any
}

interface ILocalState {
    playerId: string;
    playerStats: undefined | IPlayerStatsHistory
}

const styles = (theme: Theme) => ({
    root: {
    }
});

class GraphContainer extends React.Component<IProps> {
    private playerStore = stores.playerDataStore;
    public state: ILocalState = {
        playerId: '',
        playerStats: undefined
    }
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {this.state.playerStats ? <Graph playerStats={this.state.playerStats}/> : null}
                <div>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>
                        Send
                    </Button>
                    <TextField label="Player ID" variant="outlined" onChange={this.onPlayerIdChange} />
                </div>
        </div>);
    }
    private onPlayerIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, playerId: e.target.value})
    }

    private onSubmit = async () => {
        const response: FPLSResponse = await this.playerStore.getPlayerStats(this.state.playerId);
        this.setState({...this.state, playerStats: response.data})
    }

}

export default withStyles(styles, { withTheme: true })(GraphContainer);
