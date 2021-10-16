import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

interface IProps {
    classes: any;
    items: React.ReactNode[]
}

const styles = (theme: Theme) => ({});

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function ItemsCarousel(props: IProps) {
    const { items } = props;

    return (
        <Carousel responsive={responsive}>
            {items}
        </Carousel>
    );
}

export default withStyles(styles)(ItemsCarousel);