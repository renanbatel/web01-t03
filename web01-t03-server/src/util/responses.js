function error( response, message = "Bad Request" ) {
  
  response.status( 400 ).send( {
    error: true,
    message: message
  } );
}

function success( response, result ) {

  response.status( 200 ).send( {
    success: true,
    result: result
  } );
}

function sendDefault( response, requestError, result ) {
  if( requestError ) {
    error( response );
  } else {
    success( response, result );
  }
}

module.exports = {
  error,
  success,
  sendDefault
};