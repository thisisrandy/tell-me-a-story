import React from "react";
import { CssBaseline } from "@material-ui/core";
import TopBarContainer from "./TopBarContainer";
import Stories from "./Stories";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBarContainer />
      <Stories />
    </React.Fragment>
  );
}

export default App;
