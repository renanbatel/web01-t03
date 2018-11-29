const mongoose = require( "mongoose" );

const abilitieSchema = mongoose.Schema( {
  title: String,
  description: String
} );

module.exports = mongoose.model( "abilitie", abilitieSchema );