import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Container from "@material-ui/core/Container";

import NavigationBar from "./modules/Navigation/Bar.js";
import Section from "./modules/Section/Section.js";

import styles from "./styles.js";

import sections from "./static/data.js";

function App() {
  const container = styles();
  return (
    <div className="App" style={{ backgroundColor: "lightgray" }}>
      <Container maxWidth="md" disableGutters classes={container}>
        <Router>
          <NavigationBar tabs={sections.map((section) => section.info)} />

          <Switch>
            <Route path="/" exact>
              <Redirect to={sections[0].info.route} />
            </Route>

            {sections.map(({ info, content }) => {
              return (
                <Route path={info.route} exact>
                  <Section kind={info.kind} content={content} />
                </Route>
              );
            })}
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
