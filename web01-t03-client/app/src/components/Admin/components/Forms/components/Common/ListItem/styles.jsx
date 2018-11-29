import { createStyles } from "@material-ui/core";

export default ( theme ) => {

  return createStyles( {
    inner: {
      display: "flex",
      flexDirection: "column"
    },
    actions: {
      display: "flex",
      justifyContent: "flex-end"
    },
    action: {
      marginLeft: ".4rem"
    }
  } )
}