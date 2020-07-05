import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import avatar from "../static/avatar.jpg";
import { TabData } from "../data.js";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flex: "1 auto",
  },
});

const boxStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
const avatarStyles = makeStyles({
  root: {
    width: 300,
    height: 300,
    margin: 20,
  },
});
const cardStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 400,
    margin: 20,
  },
});
const tabStyles = makeStyles({
  root: {
    maxWidth: "unset",
  },
  selected: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const boxClasses = boxStyles();

  if (value === index)
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
        }}
        {...other}
      >
        <Box classes={boxClasses}>{children}</Box>
      </div>
    );
  else return <div />;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabView() {
  const classes = useStyles();
  const avatarClasses = avatarStyles();
  const cardClasses = cardStyles();
  const tabClasses = tabStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Navigation tabs"
        >
          {TabData.map((tabData, index) => {
            return (
              <Tab
                label={tabData.name}
                classes={tabClasses}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Avatar alt="Shreevari SP" src={avatar} classes={avatarClasses} />
        <Card classes={cardClasses}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Shreevari SP
            </Typography>
            <Typography gutterBottom>
              I'm @shreevari on Twitter, Github and IRC. You can also find me as
              s_p on IRC.
            </Typography>
            <Typography>
              E-mail: shreevari[dot]sp[at]protonmail[dot]com (Please mention
              that you got my email from here.)
            </Typography>
            <Typography id="call-policy">
              Phone: +91 98867 39496 (I don't prefer calls)
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Download Resume</Button>
          </CardActions>
        </Card>
        <Card classes={cardClasses}>
          <CardContent>
            <Typography gutterBottom>I love Rust.</Typography>
            <Typography gutterBottom>
              Computers are rocks that we tricked into thinking.
            </Typography>
            <Typography gutterBottom>Multimedia geek.</Typography>
            <Typography gutterBottom>
              I'm heavily influenced by Mozilla. Check out their
              website(https://mozilla.org) to know why.
            </Typography>
          </CardContent>
        </Card>
      </TabPanel>

      <TabPanel value={value} index={1}>
        {TabData[1].posts.map((post, index) => {
          return (
            <Card classes={cardClasses}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn more
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography>Oh, don't you worry! This will come soon(TM).</Typography>
      </TabPanel>
    </div>
  );
}
