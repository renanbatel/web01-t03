const express    = require( "express" );
const bodyParser = require( "body-parser" );
const cors       = require( "cors" );
const index      = require( "./route" );
const abilities  = require( "./route/abilities" );
const formations = require( "./route/formations" );
const interests  = require( "./route/interests" );
const languages  = require( "./route/languages" );
const lessons  = require( "./route/lessons" );
const links      = require( "./route/links" );
const works      = require( "./route/works" );
const users      = require( "./route/users" );
const model      = require( "./model" );

const app = express();

// MiddleWares

const corsOptions = {
  origin: "*",
  methods: [ "GET", "POST", "PUT", "DELETE" ] 
}

app.use( cors( corsOptions ) );
app.use( bodyParser.json( { limit: "10mb" } ) );
app.use( bodyParser.urlencoded( { extended: false } ) );

// Database

model.connect();

// Routes

app.use( "/", index );
app.use( "/abilities", abilities );
app.use( "/formations", formations );
app.use( "/interests", interests );
app.use( "/languages", languages );
app.use( "/lessons", lessons );
app.use( "/links", links );
app.use( "/works", works );
app.use( "/users", users );


module.exports = app;