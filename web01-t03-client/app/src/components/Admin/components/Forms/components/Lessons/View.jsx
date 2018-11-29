import React from "react"
import { Grid, withStyles, TextField, Button, Typography } from "@material-ui/core"
import ListItem from "../Common/ListItem"
import styles from "../Common/styles"

const View = ( { target: { id }, lessons, lesson: { name, date, grade }, submit, remove, edit, onChange, classes } ) => {

  return (
    <div>
      <div className={ classes.panel }>
        {
          lessons.map( ( lesson, key ) => {
            return (
              <ListItem key={ key } id={ lesson._id } title={ lesson.name } remove={ remove } edit={ edit }>
                <Typography component="p" variant="body1"><strong>Data: </strong>{ lesson.date }</Typography>
                <Typography component="p" variant="body1"><strong>Note: </strong>{ lesson.grade }</Typography>
              </ListItem>
            )
          } )
        }
      </div>
      <form className={ classes.form } onSubmit={ submit }>
        <Typography className={ classes.formTitle } component="h6" variant="h6">{ id ? "Atualize a lição" : "Adione uma lição" }</Typography>
        <Grid container spacing={ 16 }>
          <Grid item xs={ 12 }>
            <TextField 
              className={ classes.input }
              required
              label="Nome"
              fullWidth
              value={ name }
              onChange={ onChange( "name" ) }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField
              label="Data"
              type="date"
              value={ date }
              required
              fullWidth
              className={ classes.input }
              onChange={ onChange( "date" ) }
              InputLabelProps={{
                shrink: true,
              } }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField 
              className={ classes.input }
              required
              label="Nota"
              rows="3"
              rowsMax="5"
              fullWidth
              value={ grade }
              onChange={ onChange( "grade" ) }
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