import { createStyles } from "@material-ui/core"
import { blue, grey } from "@material-ui/core/colors"

export default ( theme ) => {

  return createStyles( {
    form: {
      overflow: "auto"
    },
    file: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "2.8rem"
    },
    image: {
      width: "80%",
      maxWidth: "240px",
      height: "auto"
    },
    label: {
      marginBottom: "1em"
    },
    download: {
      color: blue[500]
    },
    buttonIcon: {
      marginLeft: ".6rem"
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