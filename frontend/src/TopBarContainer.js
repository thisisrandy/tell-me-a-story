import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import GitHubIcon from "@material-ui/icons/GitHub";
import HelpIcon from "@material-ui/icons/Help";
import HideOnScroll from "./HideOnScroll";
import { useStyles } from "./useStyles";

export default function TopBarContainer() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setDrawerOpen(open);
  };

  const sideList = () => (
    <div
      className={classes.topDrawer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText>Tell me a story!</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText>What is this thing?</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText>Show me the code!</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              aria-controls="main-menu"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h3" className={classes.title}>
              Tell Me a Story
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <SwipeableDrawer
        anchor="top"
        open={drawerOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        {sideList()}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
