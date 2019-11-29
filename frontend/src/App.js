import React from "react";
import { Router, Redirect } from "@reach/router";
import { CssBaseline } from "@material-ui/core";
import TopBarContainer from "./TopBarContainer";
import Stories from "./Stories";
import BackgroundImageLicense from "./BackgroundImageLicense";
import DefaultRoute from "./DefaultRoute";
import { useStyles } from "./useStyles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <CssBaseline />
      <TopBarContainer />
      <Router>
        <Stories path="stories" />
        <BackgroundImageLicense path="imagelicense" />
        <Redirect from="/" to="stories" noThrow={true} />
        <DefaultRoute default />
      </Router>
    </div>
  );
}

export default App;
