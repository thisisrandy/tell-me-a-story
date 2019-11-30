import React from "react";
import ButtonLink from "./ButtonLink";
import { useStyles } from "./useStyles";

export default function HomeButton() {
  const classes = useStyles();

  return (
    <ButtonLink to="/stories" className={classes.formElement}>
      Return home
    </ButtonLink>
  );
}
