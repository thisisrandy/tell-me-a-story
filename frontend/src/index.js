import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { brown } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: brown
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
