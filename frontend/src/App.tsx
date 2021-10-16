import React from "react";
import GraphView from "./views/GraphView/GraphView";
import RelatedPlayersSliderContainer from "./views/RelatedPlayersView/RelatedPlayersSliderContainer";
import PlayerInfoContainer from "./views/PlayerInfoView/PlayerInfoContainer";

function App() {
  return (
    <div className="App" style={{
        backgroundColor: "#f6f6f6",
        height: "100vh",
    }}>
        <PlayerInfoContainer/>
        <GraphView/>
        <RelatedPlayersSliderContainer/>
    </div>
  );
}

export default App;
