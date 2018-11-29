const mongoose = require( "mongoose" );

const userSchema = mongoose.Schema( {
  name: String,
  username: String,
  email: String,
  bioShort: String,
  bioFull: String,
  photo: String,
  curriculum: String,
  moreInformation: String
} );

module.exports = mongoose.model( "user", userSchema );