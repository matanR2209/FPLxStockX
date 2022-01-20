import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import {Chart} from "react-google-charts";
import {IPlayerStatsHistory, IStatsHistory} from "shared/player/types";

interface IProps {
    classes: any;
    playerStats: IPlayerStatsHistory
}

const styles = (theme: Theme) => ({
    graphContainer: {
        display: "flex",
        margin: "0 auto",
        width: "70%"

    }
});

function MainTrendGraph(props: IProps) {
    const { classes, playerStats } = props;

    const generateData = () => {
        const res: any = []
        playerStats.transferOut.forEach((transfer:IStatsHistory, index: number) => {
           const graphEntry = [ new Date(playerStats.transferIn[index].date * 1000) , playerStats.transferIn[index].amount, playerStats.transferOut[index].amount, playerStats.points[index].amount, playerStats.totalOwners[index].amount]
            res.push(graphEntry)
        });
        return [
            ['Date', 'Transfer in', 'Transfer out', "Points", "Total owners"],
            ...res
        ]
    }
    return (
        <div className={classes.graphContainer}>
            <Chart
                width={"100%"}
                height={"100%"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={generateData()}
                options={{
                    backgroundColor: 'transparent',
                    hAxis: {
                        title: 'Date',
                    },
                    vAxis: {
                        title: 'Amount ( transfares are in K)',
                    },
                    legend: { position: 'bottom', alignment: 'start' },
                    series: {
                        0: { curveType: 'function' },
                        1: { curveType: 'function' },
                        2: { curveType: 'function' },
                        3: { curveType: 'function' },
                    },
                }}
            />
        </div>
    );
}

export default withStyles(styles)(MainTrendGraph);
