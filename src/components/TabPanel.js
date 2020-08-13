import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const PanelContainer = (props) => {
  const { children, classes, ...other } = props;

  const styles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  });

  return (
    <Box classes={styles()} {...other}>
      {children}
    </Box>
  );
};

// Displays contents based on tab active property
const TabPanel = (props) => {
  const { children, value, tabIdx, ...other } = props;
  const isActive = value === tabIdx;

  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      justifyContent: "center",
    },
  };

  return isActive ? (
    <div
      role="tabpanel"
      hidden={!isActive}
      id={`simple-tabpanel-${tabIdx}`}
      aria-labelledby={`simple-tab-${tabIdx}`}
      style={styles.root}
      {...other}
    >
      <PanelContainer>{children}</PanelContainer>
    </div>
  ) : (
    <div />
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  tabIdx: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
