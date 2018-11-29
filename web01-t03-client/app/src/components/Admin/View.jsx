import React, { Fragment } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BlockIcon from "@material-ui/icons/Block";
import Header from "./components/Header";
import Forms from "./components/Forms";
import styles from "./styles";

const View = ( { isSignedIn, forbidden, loggedUser, firebaseAuth, logout, classes } ) => {

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  return (
    <div>
      {
        isSignedIn ? (
          <Fragment>
            <Header logout={ logout }/>
            <Forms loggedUser={ loggedUser }/>
          </Fragment>
        ) : (
          <div className={ classes.loginBackground }>
            <div className={ classes.panel }>
              {
                forbidden ? (
                  <Fragment>
                    <BlockIcon className={ classes.forbiddenIcon }/>
                    <Typography className={ classes.light } component="h1" variant="h6">Você não tem permissão<br/>para acessar a administração</Typography>
                    <Button className={ classes.forbiddenButton } variant="contained" onClick={ logout }  color="secondary">Voltar</Button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Typography className={ classes.light } component="h1" variant="h3">Admin</Typography>
                    <Typography className={ classes.light } component="h2" variant="h5">Login</Typography>
                    <StyledFirebaseAuth className={ classes.auth } uiConfig={ uiConfig } firebaseAuth={ firebaseAuth() }/>
                  </Fragment>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

export default withStyles( styles )( View );
