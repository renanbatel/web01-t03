const mongoose = require( "mongoose" );

const formationSchema = mongoose.Schema( {
  institution: String,
  area: String,
  startDate: String,
  endDate: String
} );

module.exports = mongoose.model( "formation", formationSchema );