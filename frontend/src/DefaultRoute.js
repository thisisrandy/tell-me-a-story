import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { useStyles } from "./useStyles";
import HomeButton from "./HomeButton";

export default function DefaultRoute() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.formElement}>
          Nothing here (yet?)!
        </Typography>
        <HomeButton />
      </Paper>
    </div>
  );
}
