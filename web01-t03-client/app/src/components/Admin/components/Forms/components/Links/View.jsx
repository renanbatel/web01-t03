import React from "react"
import { Grid, withStyles, TextField, Button, Typography } from "@material-ui/core"
import ListItem from "../Common/ListItem"
import styles from "../Common/styles"

const View = ( { target: { id }, links, link: { title, url }, submit, remove, edit, onChange, classes } ) => {

  return (
    <div>
      <div className={ classes.panel }>
        {
          links.map( ( link, key ) => {
            console.log( link )
            return (
              <ListItem key={ key } id={ link._id } title={ link.title } remove={ remove } edit={ edit }>
                <Typography component="p" variant="body1"><strong>URL: </strong><a href={ link.url }>{ link.url }</a>{ link.date }</Typography>
              </ListItem>
            )
          } )
        }
      </div>
      <form className={ classes.form } onSubmit={ submit }>
        <Typography className={ classes.formTitle } component="h6" variant="h6">{ id ? "Atualize o link" : "Adione um link" }</Typography>
        <Grid container spacing={ 16 }>
          <Grid item xs={ 12 }>
            <TextField 
              className={ classes.input }
              required
              label="Título"
              fullWidth
              value={ title }
              onChange={ onChange( "title" ) }
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              label="URL"
              value={ url }
              required
              fullWidth
              className={ classes.input }
              onChange={ onChange( "url" ) }
            />
          </Grid>
          <Grid item xs={ 12 }>
            <Button className={ classes.submit } type="submit">{ id ? "Atualizar" : "Adicionar" }</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default withStyles( styles )( View )