import React, { Component } from "react";
import config from "../../config";
import View from "./View";

export default class extends Component {

  componentDidMount() {
    document.title = `${ config.site.name } | Home`;
  }

  render() {

    return (
      <View />
    );
  }
}