const mongoose = require( "mongoose" );

const linkSchema = mongoose.Schema( {
  title: String,
  url: String
} );

module.exports = mongoose.model( "link", linkSchema );