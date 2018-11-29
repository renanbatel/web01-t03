const mongoose = require( "mongoose" );

const languageSchema = mongoose.Schema( {
  name: String,
  level: String
} );

module.exports = mongoose.model( "language", languageSchema );