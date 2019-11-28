import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import GitHubIcon from "@material-ui/icons/GitHub";
import HelpIcon from "@material-ui/icons/Help";
import HideOnScroll from "./HideOnScroll";
import { useStyles } from "./useStyles";
import ListItemLink from "./ListItemLink";

export default function TopBarContainer() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setDrawerOpen(open);
  };

  const itemsList = () => (
    <div
      className={classes.topDrawer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemLink to="/stories">
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText>Tell me a story!</ListItemText>
        </ListItemLink>
        <ListItemLink to="/whatisit">
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText>What is this thing?</ListItemText>
        </ListItemLink>
        <ListItemLink
          to="https://github.com/thisisrandy/tell-me-a-story"
          isExternal
        >
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText>Show me the code!</ListItemText>
        </ListItemLink>
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
        {itemsList()}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
