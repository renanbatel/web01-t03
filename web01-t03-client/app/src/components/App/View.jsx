import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import Home from "../Home";
import Admin from "../Admin";

export default ( { theme } ) => {

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline>
        <Router>
          <div className="app">
            <Route exact path="/" component={ Home }/>
            <Route path="/admin" component={ Admin }/>
          </div>
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  );
};
