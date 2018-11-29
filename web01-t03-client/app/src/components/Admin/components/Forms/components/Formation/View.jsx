import React from "react"
import { Grid, withStyles, TextField, Button, Typography } from "@material-ui/core"
import ListItem from "../Common/ListItem"
import styles from "../Common/styles"

const View = ( { target: { id }, formations, formation: { institution, area, startDate, endDate}, submit, remove, edit, onChange, classes } ) => {

  return (
    <div>
      <div className={ classes.panel }>
        {
          formations.map( ( formation, key ) => {
            return (
              <ListItem key={ key } id={ formation._id } title={ formation.area } remove={ remove } edit={ edit }>
                <Typography component="p" variant="body1"><strong>Instituição: </strong>{ formation.institution }</Typography>
                <Typography component="p" variant="body1"><strong>Início: </strong>{ formation.startDate || "Não informado" }</Typography>
                <Typography component="p" variant="body1"><strong>Término: </strong>{ formation.endDate || "Não informado" }</Typography>
              </ListItem>
            )
          } )
        }
      </div>
      <form className={ classes.form } onSubmit={ submit }>
        <Typography className={ classes.formTitle } component="h6" variant="h6">{ id ? "Atualize a formação" : "Adione uma formação" }</Typography>
        <Grid container spacing={ 16 }>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField 
              className={ classes.input }
              required
              label="Instituição"
              fullWidth
              value={ institution }
              onChange={ onChange( "institution" ) }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField 
              className={ classes.input }
              required
              label="Area"
              fullWidth
              value={ area }
              onChange={ onChange( "area" ) }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField
              label="Início"
              type="date"
              value={ startDate }
              fullWidth
              className={ classes.input }
              onChange={ onChange( "startDate" ) }
              InputLabelProps={{
                shrink: true,
              } }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField
              label="Término"
              type="date"
              value={ endDate }
              fullWidth
              className={ classes.input }
              onChange={ onChange( "endDate" ) }
              InputLabelProps={{
                shrink: true,
              } }
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