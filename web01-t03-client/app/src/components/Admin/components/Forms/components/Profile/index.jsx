import React, { Component } from "react"
import service from "../../../../../../service"
import View from "./View"

export default class extends Component {

  state = {
    target: {
      name: "users",
      id: ""
    },
    profile: {
      bioShort: "",
      bioFull: "",
      photo: "",
      curriculum: "",
      moreInformation: ""
    }
  }

  constructor( props ) {
    super( props )
    this.state.target.id = this.props.loggedUser
    this.uploadFile      = this.uploadFile.bind( this )
    this.onChange        = this.onChange.bind( this )
    this.submit          = this.submit.bind( this )
  }

  componentWillMount() {
    
    service.get( this.state.target )
      .then( ( response ) => {
        this.setState( {
          profile: response.result
        } )
      } )
  }

  submit( event ) {
    event.preventDefault()

    service.update( this.state.target, this.state.profile )
      .then( ( response ) => {
        alert( "success" )
      } )
  }

  onChange( field ) {
    
    return ( event ) => {
      const profile = { ...this.state.profile }
      profile[ field ] = event.target.value 
      
      this.setState( { profile } )
    }
  }

  uploadFile( field ) {

    return ( file ) => {
      const fileReader = new FileReader()

      fileReader.readAsDataURL( file )
      fileReader.addEventListener( "load", () => {
        const profile = { ...this.state.profile }
        profile[ field ] = fileReader.result
        this.setState( { profile } )
      } )
    }
  }

  render() {
    
    return (
      <View 
        { ...this.props }
        { ...this.state }
        onChange={ this.onChange }
        uploadFile={ this.uploadFile }
        submit={ this.submit }
      />
    );
  }
}