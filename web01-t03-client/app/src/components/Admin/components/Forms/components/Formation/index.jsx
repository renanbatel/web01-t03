import React, { Component } from "react"
import service from "../../../../../../service"
import View from "./View"

export default class extends Component {

  state = {
    target: {
      name: "formations",
      id: ""
    },
    formations: [],
    formation: {
      institution: "",
      area: "",
      startDate: "",
      endDate: ""
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
    const formation = this.state.formation

    formation[ field ] = event.currentTarget.value
    this.setState( { formation } )
  }

  updateList() {
    
    service.get( { name: this.state.target.name } )
      .then( ( response ) => {
        this.setState( {
          formations: response.result
        } )
      } )
  }

  submit( event ) {
    event.preventDefault()
    
    if( this.state.target.id ) {

      service.update( this.state.target, this.state.formation )
        .then( ( response ) => {
          this.updateList()
        } )
    } else {

      service.create( this.state.target, this.state.formation )
        .then( ( response ) => {
          this.updateList()
        } )
    }

    this.setState( {
      target: {
        name: "formations",
        id: ""
      },
      formation: {
        institution: "",
        area: "",
        startDate: "",
        endDate: ""
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
        name: "formations",
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
          formation: response.result
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