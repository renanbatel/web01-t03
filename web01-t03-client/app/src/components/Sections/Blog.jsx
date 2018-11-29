import React, { Component } from "react";
import { Typography } from "@material-ui/core";

export default function Blog( props ) {
  const { section } = props;

  return (
    <Typography variant="h6">
      { section.name }
    </Typography>
  );
}