import React from "react"
import { Grid, withStyles, TextField, Button, Typography } from "@material-ui/core"
import ListItem from "../Common/ListItem"
import styles from "../Common/styles"

const View = ( { target: { id }, works, work: { title, description, date }, submit, remove, edit, onChange, classes } ) => {

  return (
    <div>
      <div className={ classes.panel }>
        {
          works.map( ( work, key ) => {
            return (
              <ListItem key={ key } id={ work._id } title={ work.title } remove={ remove } edit={ edit }>
                <Typography component="p" variant="body1"><strong>Data: </strong>{ work.date }</Typography>
                <Typography component="p" variant="body1"><strong>Descrição: </strong></Typography>
                <Typography component="p" variant="body1">{ work.description }</Typography>
              </ListItem>
            )
          } )
        }
      </div>
      <form className={ classes.form } onSubmit={ submit }>
        <Typography className={ classes.formTitle } component="h6" variant="h6">{ id ? "Atualize o projeto" : "Adione um projeto" }</Typography>
        <Grid container spacing={ 16 }>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField 
              className={ classes.input }
              required
              label="Título"
              fullWidth
              value={ title }
              onChange={ onChange( "title" ) }
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
          <Grid item xs={ 12 }>
            <TextField 
              className={ classes.input }
              required
              label="Descrição"
              rows="3"
              rowsMax="5"
              fullWidth
              value={ description }
              onChange={ onChange( "description" ) }
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