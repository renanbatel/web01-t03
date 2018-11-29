const User      = require( "../model/User" );
const responses = require( "../util/responses" );

function create( request, response, next ) {
  
  User.create( request.body, ( error, user ) => {
    if( error ) {
      responses.error( response );
    } else {
      responses.success( response, user );
    }
  } );
}

function update( request, response, next ) {
  const conditions  = { username: request.params.username }

  User.findOneAndUpdate( conditions, request.body, { new: true }, ( error, user ) => {
    if( error ) {
      responses.error( response );
    } else {
      responses.success( response, user );
    }
  } );
}

function read( request, response, next ) {
  const conditions = { username: request.params.username };

  User.findOne( conditions, ( error, user ) => {
    if( error ) {
      responses.error( response );
    } else {
      responses.success( response, user );
    }
  } );
}

module.exports = {
  create,
  update,
  read
};
