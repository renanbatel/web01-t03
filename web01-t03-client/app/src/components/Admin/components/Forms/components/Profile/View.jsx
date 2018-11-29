import React from "react"
import { FilePicker } from "react-file-picker"
import { TextField, Button, withStyles, Typography } from "@material-ui/core"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"
import styles from "./styles"

const View = ( { profile: { photo, curriculum, bioShort, bioFull, moreInformation }, onChange, uploadFile, submit, classes } ) => {
  
  return (
    <form className={ classes.form } onSubmit={ submit }>
      <div>
        <Typography className={ classes.label } component="p" variant="body1">Foto</Typography>
        <div className={ classes.file }>
          <img className={ classes.image } src={ photo }/>
          <FilePicker
            extension={ [ "jpg", "jpeg", "png" ] }
            onChange={ uploadFile( "photo" ) }
          >
            <Button variant="contained" color="primary">Carregar<CloudUploadIcon className={ classes.buttonIcon }/></Button>
          </FilePicker>
        </div>
      </div>
      <div>
        <Typography className={ classes.label } component="p" variant="body1">Currículo</Typography>
        <div className={ classes.file }>
          <Button className={ classes.download } href={ curriculum } download="curriculum.pdf">Baixar <CloudDownloadIcon className={ classes.buttonIcon }/></Button>
          <FilePicker
            extension={ [ "pdf" ] }
            onChange={ uploadFile( "curriculum" ) }
          >
            <Button variant="contained" color="primary">Carregar<CloudUploadIcon className={ classes.buttonIcon }/></Button>
          </FilePicker>
        </div>
      </div>
      <TextField 
        className={ classes.input }
        required
        label="Biografia resumida"
        multiline
        rows="3"
        rowsMax="5"
        fullWidth
        value={ bioShort }
        onChange={ onChange( "bioShort" ) }
      />
      <TextField
        className={ classes.input } 
        required
        label="Biografia completa"
        multiline
        rows="5"
        rowsMax="7"
        fullWidth
        value={ bioFull }
        onChange={ onChange( "bioFull" ) }
      />
      <TextField
        className={ classes.input } 
        required
        label="Mais Informações"
        multiline
        rows="3"
        rowsMax="5"
        fullWidth
        value={ moreInformation }
        onChange={ onChange( "moreInformation" ) }
      />
      <Button className={ classes.submit } type="submit">Enviar</Button>
    </form>
  )
}

export default withStyles( styles )( View )