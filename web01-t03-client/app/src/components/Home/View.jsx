import React from "react";
import { Link } from "react-router-dom";
// import Header from "../Partials/Header";
// import Footer from "../Partials/Footer";
// import Main from "../Sections/Main";

export default ( {} ) => {
  
  return (
    // <React.Fragment>
    //   <CssBaseline />

    //   <Header config={ config.header } sections={ config.sections }/>
    //   <Main sections={ config.sections }/>
    //   <Footer />

    // </React.Fragment>
    <div>
      <h1>Home</h1>
      <Link to="/admin">Admin</Link>
    </div>
  );
};