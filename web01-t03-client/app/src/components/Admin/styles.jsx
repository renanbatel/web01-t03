import { createStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

export default createStyles( {
  loginBackground: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: teal[600]
  },
  panel: {
    textAlign: "center"
  },
  auth: {
    marginTop: "1.6rem"
  },
  forbiddenButton: {
    marginTop: "1.2rem"
  },
  forbiddenIcon: {
    color: "#fff",
    fontSize: "3.6em"
  },
  light: {
    color: "#fff"
  }
} );