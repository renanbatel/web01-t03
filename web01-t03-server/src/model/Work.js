const mongoose = require( "mongoose" );

const workSchema = mongoose.Schema( {
  title: String,
  description: String,
  date: String
} );

module.exports = mongoose.model( "work", workSchema );