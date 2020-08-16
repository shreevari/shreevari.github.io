import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import styles from "./styles.js";

const AboutCard = (props) => {
  const { title, children } = props;
  const card = styles();

  return (
    <Card classes={card}>
      <CardContent>
        <Typography gutterBottom variant="h3">
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
export default AboutCard;
