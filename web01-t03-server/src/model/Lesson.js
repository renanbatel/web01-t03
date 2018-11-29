const mongoose = require( "mongoose" );

const lessonSchema = mongoose.Schema( {
  name: String,
  date: String,
  grade: String
} );

module.exports = mongoose.model( "lesson", lessonSchema );