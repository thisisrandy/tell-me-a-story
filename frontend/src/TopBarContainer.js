import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import HideOnScroll from "./HideOnScroll";
import { useStyles } from "./useStyles";

export default function TopBarContainer() {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h3" className={classes.title}>
            Tell Me a Story
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
