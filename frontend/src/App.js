import React from "react";
import { Router, Redirect } from "@reach/router";
import { CssBaseline } from "@material-ui/core";
import TopBarContainer from "./TopBarContainer";
import Stories from "./Stories";
import BackgroundImageLicense from "./BackgroundImageLicense";
import DefaultRoute from "./DefaultRoute";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBarContainer />
      <Router>
        <Stories path="stories" />
        <BackgroundImageLicense path="imagelicense" />
        <Redirect from="/" to="stories" noThrow={true} />
        <DefaultRoute default />
      </Router>
    </React.Fragment>
  );
}

export default App;
