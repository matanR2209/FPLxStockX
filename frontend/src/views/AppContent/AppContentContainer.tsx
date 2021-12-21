import React from "react";
import {observer} from "mobx-react";
import AppContent from "./AppContent";

interface IProps {}

class AppContentContainer extends React.Component<IProps> {
    public render() {
        return <AppContent/>;
    }
}

export default observer(AppContentContainer)