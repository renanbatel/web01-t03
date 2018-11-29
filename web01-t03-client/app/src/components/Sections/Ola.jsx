import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";
import CloudDownload from "@material-ui/icons/CloudDownload";

const styles = createStyles( {
  image: {
    width: "100%",
    height: "auto"
  },
  title: {
    marginBottom: "1.4rem"
  },
  paragraph: {
    marginBottom: ".88rem"
  },
  download: {
    float: "right"
  },
  icon: {
    marginRight: ".6rem"
  },
  "@media ( min-width: 1280px )": {
    title: {
      marginBottom: "1.8rem",
      fontSize: "2.4rem"
    },
    paragraph: {
      marginBottom: "1.2rem",
      fontSize: "1.15rem"
    },
    download: {
      marginTop: "1.2rem"
    }
  }
} );

function Ola( props ) {
  const { section, classes } = props;
  const { data }             = section;

  return (
    <div className="container">
      <Grid container spacing={ 24 }>

        <Grid item xs={ 12 } sm={ 4 }>
          <img className={ classes.image } src={ data.photo }/>
        </Grid>

        <Grid item xs={ 12 } sm={ 8 }>
          <Typography className={ classes.title } component="h2" variant="h4">{ data.content.title }</Typography>
          {
            data.content.text.map( ( paragraph, key ) => {
              return <Typography className={ classes.paragraph } key={ key } component="p" variant="body1">{paragraph}</Typography>;
            } )
          }
          <Button className={ classes.download } href={ data.link } target="_blank" rel="noopener" variant="contained" color="primary">
            <CloudDownload className={ classes.icon }/> Baixar currículo
          </Button>
        </Grid>

      </Grid>
    </div>
  );
}

Ola.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( Ola );