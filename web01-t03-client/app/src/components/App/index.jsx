import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core";
import { teal, grey } from "@material-ui/core/colors";
import View from "./View";
import "./style.scss";

export default class extends Component {

  theme = createMuiTheme( {
    palette: {
      primary: {
        main: teal[600]
      },
      secondary: {
        main: grey[100]
      }
    },
    typography: {
      useNextVariants: true
    }
  } );

  render() {

    return (
      <View theme={ this.theme }/>
    );
  }
}