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
    graphContainer: {
        display: "flex",
        margin: "0 auto",
        width: "70%"

    }
});

function Graph(props: IProps) {
    const { classes, playerStats } = props;

    const generateData = () => {
        const res: any = []
        playerStats.transferOut.forEach((transfer:IStatsHistory, index: number) => {
           const graphEntry = [ new Date(playerStats.transferIn[index].date * 1000) , playerStats.transferIn[index].amount / 1000, playerStats.transferOut[index].amount / 1000, playerStats.points[index].amount]
            res.push(graphEntry)
        });
        return [
            ['date', 'Transfer in', 'transfer out', "points"],
            ...res
        ]
    }

    return (
        <div className={classes.graphContainer}>
            <Chart
                width={"100%"}
                height={"100%"}
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
                    legend: { position: 'bottom', alignment: 'start' },

                }}
            />
        </div>
    );
}

export default withStyles(styles)(Graph);
