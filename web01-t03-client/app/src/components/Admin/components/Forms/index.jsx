import React, { Component } from "react"
import View from "./View"
import service from "../../../../service"

export default class extends Component {

  state = {
    tabKey: 0
  }

  constructor( props ) {
    super( props )
    this.changeTab = this.changeTab.bind( this )
  }

  changeTab( event, tabKey ) {
    this.setState( {
      tabKey: tabKey
    } )
  } 

  render() {
    
    return (
      <View 
        { ...this.state } 
        { ...this.props }
        changeTab={ this.changeTab }
      />
    )
  }
}