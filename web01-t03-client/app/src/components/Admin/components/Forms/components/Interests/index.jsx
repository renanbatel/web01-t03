import React, { Component } from "react"
import service from "../../../../../../service"
import View from "./View"

export default class extends Component {

  state = {
    target: {
      name: "interests",
      id: ""
    },
    interests: [],
    interest: {
      title: "",
      description: ""
    }
  }

  constructor( props ) {
    super( props )
    
    this.submit = this.submit.bind( this )
  }

  componentWillMount() {
    this.updateList()
  }

  onChange = ( field ) => ( event ) => {
    const interest = this.state.interest

    interest[ field ] = event.currentTarget.value
    this.setState( { interest } )
  }

  updateList() {

    service.get( { name: this.state.target.name } )
      .then( ( response ) => {
        this.setState( {
          interests: response.result || []
        } )
      } )
  }

  submit( event ) {
    event.preventDefault()
    
    if( this.state.target.id ) {

      service.update( this.state.target, this.state.interest )
        .then( ( response ) => {
          this.updateList()
        } )
    } else {

      service.create( this.state.target, this.state.interest )
        .then( ( response ) => {
          this.updateList()
        } )
    }

    this.setState( {
      target: {
        name: "interests",
        id: ""
      },
      interest: {
        title: "",
        description: "",
      }
    } )
  }

  remove = ( id ) => ( event ) => {
    event.preventDefault()

    const target = this.state.target

    target.id = id

    service.remove( target )
      .then( ( response ) => {
        this.updateList()
      } )

    this.setState( {
      target: {
        name: "interests",
        id: ""
      }
    } )
  }

  edit = ( id ) => ( event ) => {
    event.preventDefault()

    const target = this.state.target

    target.id = id

    service.get( target )
      .then( ( response ) => {
        
        this.setState( {
          target: target,
          interest: response.result
        } )
      } )
  }

  render() {
    

    return (
      <View 
        { ...this.props }
        { ...this.state }
        onChange={ this.onChange }
        submit={ this.submit }
        remove={ this.remove }
        edit={ this.edit }
      />
    );
  }
}