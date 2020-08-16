import { makeStyles } from "@material-ui/core/styles";

const about = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export const avatar = makeStyles({
  root: {
    width: "14em",
    height: "14em",
    margin: "1em",
  },
});

export default about;
