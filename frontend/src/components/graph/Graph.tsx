import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import {Chart} from "react-google-charts";
import {IPlayerStatsHistory, IStatsHistory} from "../../../../shared/model/player/types";
interface IProps {
    classes: any;
    playerStats: IPlayerStatsHistory
}

const styles = (theme: Theme) => ({
    root: {}
});

function Graph(props: IProps) {
    const { classes, playerStats } = props;

    const generateData = () => {
        const res: any = []
        playerStats.transferOut.forEach((transfer:IStatsHistory, index: number) => {
           const graphEntry = [ new Date(playerStats.transferIn[index].date * 1000) , playerStats.transferIn[index].amount / 1000, playerStats.transferOut[index].amount / 1000, playerStats.points[index].amount]
            res.push(graphEntry)
        });
        console.log(res);
        return [
            ['date', 'Transfer in', 'transfer out', "points"],
            ...res
        ]
    }

    return (
        <div className={classes.root}>
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={generateData()}
                options={{
                    hAxis: {
                        title: 'Date',
                    },
                    vAxis: {
                        title: 'Amount ( transfares are in K)',
                    },
                }}
            />
        </div>
    );
}

export default withStyles(styles)(Graph);
