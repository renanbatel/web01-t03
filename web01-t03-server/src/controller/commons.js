const Abilitie  = require( "../model/Abilitie" );
const Formation = require( "../model/Formation" );
const Lesson  = require( "../model/Lesson" );
const Interest  = require( "../model/Interest" );
const Language  = require( "../model/Language" );
const Link      = require( "../model/Link" );
const Work      = require( "../model/Work" );
const responses = require( "../util/responses" );

const models = {
  abilities: Abilitie,
  formations: Formation,
  lessons: Lesson,
  interests: Interest,
  languages: Language,
  links: Link,
  works: Work
};

function Model( request ) {
  const model = request.baseUrl.replace( '/', '' );

  return models[ model ];
}

function list( request, response, next ) {
  
  Model( request ).find( ( error, documents ) => {
    responses.sendDefault( response, error, documents );
  } );
}

function create( request, response, next ) {
  
  Model( request ).create( request.body, ( error, document ) => {
    responses.sendDefault( response, error, document );
  } );
}

function read( request, response, next ) {
  const id = request.params.id;

  Model( request ).findById( id, ( error, document ) => {
    responses.sendDefault( response, error, document );
  } );
}

function update( request, response, next ) {
  const id = request.params.id;

  Model( request ).findByIdAndUpdate( id, request.body, { new: true }, ( error, document ) => {
    responses.sendDefault( response, error, document );
  } );
}

function remove( request, response, next ) {
  const id = request.params.id;

  Model( request ).findByIdAndDelete( id, request.body, ( error, document ) => {
    responses.sendDefault( response, error, document );
  } )
}

module.exports = {
  list,
  create,
  read,
  update,
  remove
}