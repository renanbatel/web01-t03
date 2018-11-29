import React, { Component } from "react"
import service from "../../../../../../service"
import View from "./View"

export default class extends Component {

  state = {
    target: {
      name: "lessons",
      id: ""
    },
    lessons: [],
    lesson: {
      name: "",
      date: "",
      grade: ""
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
    const lesson = this.state.lesson

    lesson[ field ] = event.currentTarget.value
    this.setState( { lesson } )
  }

  updateList() {

    service.get( { name: this.state.target.name } )
      .then( ( response ) => {
        this.setState( {
          lessons: response.result || []
        } )
      } )
  }

  submit( event ) {
    event.preventDefault()
    
    if( this.state.target.id ) {

      service.update( this.state.target, this.state.lesson )
        .then( ( response ) => {
          this.updateList()
        } )
    } else {

      service.create( this.state.target, this.state.lesson )
        .then( ( response ) => {
          this.updateList()
        } )
    }

    this.setState( {
      target: {
        name: "lessons",
        id: ""
      },
      lesson: {
        name: "",
        date: "",
        grade: ""
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
        name: "languages",
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
          lesson: response.result
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