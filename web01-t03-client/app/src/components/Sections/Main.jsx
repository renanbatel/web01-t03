import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Blog from "./Blog";
import Contato from "./Contato";
import Habilidades from "./Habilidades";
import Ola from "./Ola";
import Portfolio from "./Portfolio";
import Sobre from "./Sobre";

const styles = createStyles( {
  root: {
    paddingTop: 56
  },
  "@media ( min-width: 600px )": {
    root: {
      paddingTop: 64
    }
  }
} );

class Main extends Component {

  sectionsComponents = {
    blog: Blog,
    contato: Contato,
    habilidades: Habilidades,
    ola: Ola,
    portfolio: Portfolio,
    sobre: Sobre
  }

  render() {
    const { sections, classes } = this.props;

    return (
      <main className={ classes.root }>
        {
          sections.map( ( section, key ) => {
            const SectionTagName = this.sectionsComponents[ section.id ];

            return (
              <section key={ key } id={ section.id }>
                <SectionTagName section={ section }/>
              </section>
            );
          } )
        }
      </main>
    );
  }
}

Main.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( Main );