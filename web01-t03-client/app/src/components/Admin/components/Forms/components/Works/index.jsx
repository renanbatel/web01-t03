import React, { Component } from "react"
import service from "../../../../../../service"
import View from "./View"

export default class extends Component {

  state = {
    target: {
      name: "works",
      id: ""
    },
    works: [],
    work: {
      title: "",
      description: "",
      date: ""
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
    const work = this.state.work

    work[ field ] = event.currentTarget.value
    this.setState( { work } )
  }

  updateList() {

    service.get( { name: this.state.target.name } )
      .then( ( response ) => {
        this.setState( {
          works: response.result || []
        } )
      } )
  }

  submit( event ) {
    event.preventDefault()
    
    if( this.state.target.id ) {

      service.update( this.state.target, this.state.work )
        .then( ( response ) => {
          this.updateList()
        } )
    } else {

      service.create( this.state.target, this.state.work )
        .then( ( response ) => {
          this.updateList()
        } )
    }

    this.setState( {
      target: {
        name: "works",
        id: ""
      },
      work: {
        title: "",
        description: "",
        date: ""
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
  }

  edit = ( id ) => ( event ) => {
    event.preventDefault()

    const target = this.state.target

    target.id = id

    service.get( target )
      .then( ( response ) => {
        
        this.setState( {
          target: target,
          work: response.result
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