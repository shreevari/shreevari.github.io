import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const navBarStyles = makeStyles({
  root: {
    // DEBUG: To see the background area during debug
    backgroundColor: "lightgray",
  },
});

const navItemStyles = makeStyles({
  root: {
    maxWidth: "unset",
    minWidth: "unset",
  },
  selected: {
    minWidth: "50%",
  },
});

export default function NavigationBar() {
  const navBarClasses = navBarStyles();
  const navItemClasses = navItemStyles();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      classes={navBarClasses}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
        classes={navItemClasses}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
        classes={navItemClasses}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
        classes={navItemClasses}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
        classes={navItemClasses}
      />
    </BottomNavigation>
  );
}
