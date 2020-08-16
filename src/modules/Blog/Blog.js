import React from "react";
import PropTypes from "prop-types";

import Card from "./components/Card/Card.js";
import styles from "./styles.js";

const Blog = (props) => {
  const { posts } = props;

  const blog = styles();

  return (
    <div className={blog.root}>
      {posts.map((post, index) => {
        return <Card title={post.title} content={post.content} />;
      })}
    </div>
  );
};

Blog.propTypes = { posts: PropTypes.object.isRequired };

export default Blog;
