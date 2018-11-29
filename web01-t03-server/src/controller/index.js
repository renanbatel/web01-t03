function index( request, response, next ) {

  response.status( 200 ).send( {
    title: "web01-t03 server api",
    version: "0.0.1"
  } );
}

module.exports = {
  index
}