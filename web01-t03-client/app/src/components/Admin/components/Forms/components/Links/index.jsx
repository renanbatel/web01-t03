import React, { Component } from "react"
import service from "../../../../../../service"
import View from "./View"

export default class extends Component {

  state = {
    target: {
      name: "links",
      id: ""
    },
    links: [],
    link: {
      title: "",
      url: ""
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
    const link = this.state.link

    link[ field ] = event.currentTarget.value
    this.setState( { link } )
  }

  updateList() {

    service.get( { name: this.state.target.name } )
      .then( ( response ) => {
        console.log( this.state.target, response )
        this.setState( {
          links: response.result || []
        } )
      } )
  }

  submit( event ) {
    event.preventDefault()
    
    if( this.state.target.id ) {

      service.update( this.state.target, this.state.link )
        .then( ( response ) => {
          this.updateList()
        } )
    } else {
      console.log( this.state.link )
      service.create( this.state.target, this.state.link )
        .then( ( response ) => {
          this.updateList()
        } )
    }

    this.setState( {
      target: {
        name: "links",
        id: ""
      },
      link: {
        title: "",
        url: ""
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
        name: "links",
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
          link: response.result
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