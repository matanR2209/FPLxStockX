import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import {Chart} from "react-google-charts";
interface IProps {
    classes: any;
}

const styles = (theme: Theme) => ({
    graphContainer: {
        display: "flex",
        margin: "0 auto",
        width: "70%"

    }
});

function MainTrendGraph(props: IProps) {
    const { classes } = props;

    return (
        <div className={classes.graphContainer}>
            <Chart
                width={'7em'}
                height={'5em'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'points', 'owners'],
                    [0, 0, 0],
                    [1, 10, 5],
                    [2, 23, 15],
                    [3, 17, 9],
                    [4, 18, 10],
                    [5, 9, 5],
                    [6, 11, 3],
                    [7, 27, 19],
                ]}
                options={{
                    backgroundColor: 'transparent',
                    hAxis: {
                        title: 'Time',
                    },
                    vAxis: {
                        title: 'Popularity',
                    },
                    series: {
                        0: { curveType: 'function' },
                        1: { curveType: 'function' },
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    );
}

export default withStyles(styles)(MainTrendGraph);
