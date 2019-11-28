import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { useStyles } from "./useStyles";
import ButtonLink from "./ButtonLink";

export default function DefaultRoute() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.defaultRoute}>
          Nothing here (yet?)!
        </Typography>
        <ButtonLink to="/stories" className={classes.defaultRoute}>
          Return home
        </ButtonLink>
      </Paper>
    </div>
  );
}
