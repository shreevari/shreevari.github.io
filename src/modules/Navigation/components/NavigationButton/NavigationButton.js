import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import buttonStyles from "./styles.js";
import { link as linkStyles } from "./styles.js";

const NavigationButton = (props) => {
  const { index, setActive, name, route, active } = props;
  const button = buttonStyles();
  const link = linkStyles();

  return (
    <Button
      onClick={(event) => setActive(index)}
      classes={button}
      className={active ? button.active : {}}
    >
      <Link to={route} className={link.root}>
        {name}
      </Link>
    </Button>
  );
};

NavigationButton.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default NavigationButton;
