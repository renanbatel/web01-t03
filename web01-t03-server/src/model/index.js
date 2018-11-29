const mongoose = require( "mongoose" );
const config   = require( "../config" );

function connect() {
  mongoose.connect( 
    `mongodb://${ config.mongodb.user }:${ escape( config.mongodb.password ) }@${ config.mongodb.host }:${ config.mongodb.port }/${ config.mongodb.database }`,
    { useNewUrlParser: true }
  );
}

function disconnect() {
  mongoose.connection.close();
}

module.exports = {
  connect,
  disconnect
};