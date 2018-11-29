import { createStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

export default ( theme ) => {

  return createStyles( {
    panel: {
      width: "100%"
    },
    form: {
      paddingTop: "2.8rem"
    },
    formTitle: {
      marginBottom: "1.2rem"
    },
    input: {
      marginBottom: "1.8rem"
    },
    submit: {
      backgroundColor: grey[900],
      color: "#fff",
      float: "right",
      "&:hover": {
        backgroundColor: grey[800]
      }
    }
  } )
}