import config from "../config"

function returnJson( response ) {
  
  return response.json()
}

function request( target, params ) {
  const init = {
    ...params,
    headers: {
      "Content-Type": "application/json"
    }
  }
  
  const url = `${ config.api }/${ target.name }/${ target.id || '' }` 

  return fetch( url, init ).then( returnJson )
}

function create( target, state ) {
  return request( target, {
    method: "post",
    body: JSON.stringify( state )
  } )
}

function get( target ) {
  return request( target, {
    method: "get",
  } )
}

function update( target, state ) {
  return request( target, {
    method: "put",
    body: JSON.stringify( state )
  } )
}

function remove( target ) {
  return request( target, {
    method: "delete",
  } )
}

export default {
  create,
  get,
  update,
  remove
}