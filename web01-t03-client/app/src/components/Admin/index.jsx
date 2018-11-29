import firebase from "firebase/app";
import "firebase/auth";
import React, { Component } from "react";
import config from "../../config";
import View from "./View";

export default class extends Component {

  state = {
    isSignedIn: false,
    forbidden: false,
    loggedUser: false
  }

  firebaseConfig = {
    apiKey: "AIzaSyA4zboUM48S1MvUsvcsNZ8SeqR3QQrQywM",
    authDomain: "web01-t03.firebaseapp.com",
    databaseURL: "https://web01-t03.firebaseio.com",
    projectId: "web01-t03",
    storageBucket: "web01-t03.appspot.com",
    messagingSenderId: "1032993118345"
  };

  constructor( props ) {
    super( props );
    this.logout = this.logout.bind( this );

    try {
      firebase.initializeApp( this.firebaseConfig );
    } catch( error ) {
      if( ! /already exists/.test( error.message ) ) {
        console.error( error.stack );
      }
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged( ( user ) => {

      const state = this.state;

      state.isSignedIn = !!user && user.email === config.site.admin;
      state.forbidden  = !!user && ! state.isSignedIn;
      state.loggedUser = state.isSignedIn && ! state.forbidden ? user.email.slice( 0, user.email.indexOf( '@' ) ) : false;

      this.setState( state );
    } );
  }

  componentDidMount() {
    document.title = `${ config.site.name } | Admin`;
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    
    return (
      <View firebaseAuth={ firebase.auth } logout={ this.logout } { ...this.state }/>
    );
  }
}