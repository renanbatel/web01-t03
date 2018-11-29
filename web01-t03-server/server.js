const app = require( "./src/app" );

const port = "4200";

app.listen( port, () => {
  console.log( `Server running at ${ port }` );
} );