import React, { Component } from "react";
import { Button } from "@material-ui/core";
// import SmoothScroll from "smooth-scroll";

export default class NavLinks extends Component {
  
  // smoothScroll = new SmoothScroll();

  clickEvents( props ) {
    const { onClickEvent } = props;
    onClickEvent();
  }

  render() {
    const { sections } = this.props;

    return(
      sections.map( ( section, key ) => {
        return <Button onClick={ () => this.clickEvents( this.props ) } key={ key } color="inherit" href={ `#${ section.id }` }>{ section.name }</Button>
      } )
    );
  }
}