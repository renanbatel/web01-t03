import React from "react";
import { render } from "react-dom";
import App from "./components/App/";
import "typeface-roboto/";

render( <App />, document.getElementById( "app" ) );

// For Webpack Hot Module Replacement
! module.hot || module.hot.accept();