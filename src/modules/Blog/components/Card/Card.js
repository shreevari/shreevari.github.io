import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import styles from "./styles.js";

const BlogCard = (props) => {
  const { title, content, link } = props;

  const card = styles();

  return (
    <Card classes={card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          <Link to={link}>Learn more</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default BlogCard;
