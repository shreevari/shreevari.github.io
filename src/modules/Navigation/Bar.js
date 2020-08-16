import React from "react";

import AppBar from "@material-ui/core/AppBar";

import Button from "./components/NavigationButton/NavigationButton.js";

import styles from "./styles.js";

const Bar = (props) => {
  const { tabs } = props;
  const bar = styles();

  const [activeIdx, setActiveIdx] = React.useState(0);

  return (
    <AppBar position="static" classes={bar}>
      {tabs.map((tab, index) => {
        return (
          <Button
            index={index}
            name={tab.name}
            route={tab.route}
            setActive={setActiveIdx}
            active={activeIdx === index}
          />
        );
      })}
    </AppBar>
  );
};

export default Bar;
