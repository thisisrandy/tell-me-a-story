import React from "react";
import { Typography } from "@material-ui/core";
import PeterRabbit from "./peter_rabbit.jpg";
import { useStyles } from "./useStyles";
import ButtonLink from "./ButtonLink";

export default function DefaultRoute() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <img src={PeterRabbit} alt="Peter Rabbit" />
      <Typography variant="h5" className={classes.defaultRoute}>
        Nothing here!
      </Typography>
      <ButtonLink to="/stories" className={classes.defaultRoute}>
        Return home
      </ButtonLink>
    </div>
  );
}
