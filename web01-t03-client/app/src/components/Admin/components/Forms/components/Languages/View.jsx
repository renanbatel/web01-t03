import React from "react"
import { Grid, withStyles, TextField, Button, Typography } from "@material-ui/core"
import ListItem from "../Common/ListItem"
import styles from "../Common/styles"

const View = ( { target: { id }, languages, language: { name, level }, submit, remove, edit, onChange, classes } ) => {

  return (
    <div>
      <div className={ classes.panel }>
        {
          languages.map( ( language, key ) => {
            return (
              <ListItem key={ key } id={ language._id } title={ language.name } remove={ remove } edit={ edit }>
                <Typography component="p" variant="body1"><strong>Nível: </strong>{ language.level }</Typography>
              </ListItem>
            )
          } )
        }
      </div>
      <form className={ classes.form } onSubmit={ submit }>
        <Typography className={ classes.formTitle } component="h6" variant="h6">{ id ? "Atualize o Idioma" : "Adione um Idioma" }</Typography>
        <Grid container spacing={ 16 }>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField 
              className={ classes.input }
              required
              label="Idioma"
              fullWidth
              value={ name }
              onChange={ onChange( "name" ) }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField
              label="Nível"
              value={ level }
              required
              fullWidth
              className={ classes.input }
              onChange={ onChange( "level" ) }
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