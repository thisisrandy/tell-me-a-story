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
import ImageIcon from "@material-ui/icons/Image";
import HideOnScroll from "./HideOnScroll";
import { useStyles } from "./useStyles";
import ListItemLink from "./ListItemLink";

export default function TopBarContainer() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type &&
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
        {[
          {
            to: "/stories",
            text: "Tell me a story!",
            icon: <LocalLibraryIcon />
          },
          {
            to: "/about",
            text: "What is this thing?",
            icon: <HelpIcon />
          },
          {
            to: "https://github.com/thisisrandy/tell-me-a-story",
            text: "Show me the code!",
            icon: <GitHubIcon />,
            isExternal: true
          },
          {
            to: "/imagelicense",
            text: "Background image license",
            icon: <ImageIcon />
          }
        ].map(({ to, text, icon, isExternal }) =>
          isExternal ? (
            <ListItem
              key={to}
              button
              component="a"
              href={to}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{text}</ListItemText>
            </ListItem>
          ) : (
            <ListItemLink key={to} to={to}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{text}</ListItemText>
            </ListItemLink>
          )
        )}
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
