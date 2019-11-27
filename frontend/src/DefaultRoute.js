import React from "react";
import { Link } from "@reach/router";
import { Typography } from "@material-ui/core";
import PeterRabbit from "./peter_rabbit.jpg";
import { useStyles } from "./useStyles";

export default function DefaultRoute() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <img src={PeterRabbit} alt="Peter Rabbit" />
      <Typography variant="h4">Nothing here!</Typography>
      <Typography variant="h4">
        <Link to="/stories">Return home</Link>
      </Typography>
    </div>
  );
}
