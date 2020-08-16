import { makeStyles } from "@material-ui/core/styles";

const button = makeStyles({
  root: {
    display: "flex",
    padding: "unset",
    alignItems: "stretch",
  },
  active: {
    color: "#f5f5f5",
    flexGrow: 1,
  },
});

export const link = makeStyles({
  root: {
    all: "inherit",
    width: "100%",
    height: "100%",
    padding: "1em",
  },
});

export default button;
