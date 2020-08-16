import React from "react";

import About from "../About/About.js";
import Blog from "../Blog/Blog.js";
import MicroBlog from "../MicroBlog/MicroBlog.js";

const Section = (props) => {
  const { kind, content } = props;
  switch (kind) {
    case "about":
      return <About {...content} />;
    case "blog":
      return <Blog {...content} />;
    case "microblog":
      return <MicroBlog {...content} />;
    default:
      return <></>;
  }
};
export default Section;
