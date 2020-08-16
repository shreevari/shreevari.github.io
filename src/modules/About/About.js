import React from "react";
import PropTypes from "prop-types";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Card from "./components/Card/Card.js";
import styles from "./styles.js";
import { avatar as avatarStyles } from "./styles.js";

import Name from "../utils/name.js";
import avatarImage from "../../static/avatar.jpg";
import resume from "../../static/resume.pdf";

const About = (props) => {
  const { name, bio, contacts } = props;

  const about = styles();
  const avatar = avatarStyles();

  let nameUtil = new Name(name);

  return (
    <div className={about.root}>
      <Card>
        <Avatar
          alt={nameUtil.informalName()}
          src={avatarImage}
          classes={avatar}
        />
      </Card>

      <Card title={nameUtil.fullName()}>
        {bio.map((line) => {
          return <Typography>{line}</Typography>;
        })}
      </Card>

      <Card title="Contact">
        {contacts.map((contact) => {
          return (
            <Typography>
              {`${contact.mode}: ${contact.details.join(", ")}`}
            </Typography>
          );
        })}
      </Card>
      <a href={resume} download>
        <Button>Download Resume</Button>
      </a>
    </div>
  );
};

About.propTypes = {
  name: PropTypes.object.isRequired,
  bio: PropTypes.object.isRequired,
  contacts: PropTypes.object.isRequired,
};

export default About;
