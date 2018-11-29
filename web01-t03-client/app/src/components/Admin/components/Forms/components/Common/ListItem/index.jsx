import React from "react"
import { withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, IconButton } from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import styles from "./styles"

const View = ( { children, id, title, remove, edit, classes } ) => {

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon /> }>
        <Typography>{ title }</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={ classes.inner }>
        <div className={ classes.content }>
          { children }
        </div>
        <div className={ classes.actions }>
          <IconButton onClick={ edit( id ) } variant="contained" className={ classes.action }><EditIcon/></IconButton>
          <IconButton onClick={ remove( id ) } variant="contained" className={ classes.action }><DeleteIcon/></IconButton>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default withStyles( styles )( View )