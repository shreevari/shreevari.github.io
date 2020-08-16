import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

const MicroBlog = (props) => {
  const { message } = props;
  return <Typography>{message}</Typography>;
};

MicroBlog.propTypes = {
  message: PropTypes.string,
};

export default MicroBlog;
