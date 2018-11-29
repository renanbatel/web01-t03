import React, { Component } from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Header = ( { logout, classes } ) => (
  <AppBar className={ classes.appBar }>
    <div className="container">

      <Toolbar>
        <Typography className={ classes.grow } component="span" variant="h6" color="inherit">Admin</Typography>
        <Button color="secondary" onClick={ logout }>Logout</Button>
      </Toolbar>
      
    </div>
  </AppBar>
);

export default withStyles( styles )( Header );