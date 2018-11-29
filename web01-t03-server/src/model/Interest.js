const mongoose = require( "mongoose" );

const interestSchema = mongoose.Schema( {
  title: String,
  description: String
} );

module.exports = mongoose.model( "interest", interestSchema );