import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import TabView from "./components/TabView.js";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "lightgray" }}>
      <Container maxWidth="lg" disableGutters={true}>
        <TabView />
      </Container>
    </div>
  );
}

export default App;
