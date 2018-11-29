import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import Abilities from "./components/Abilities"
import Formation from "./components/Formation"
import Interests from "./components/Interests"
import Languages from "./components/Languages"
import Lessons from "./components/Lessons"
import Links from "./components/Links"
import Profile from "./components/Profile"
import Works from "./components/Works"
import styles from "./styles"

const tabComponents = [
  Profile,
  Formation,
  Works,
  Abilities,
  Interests,
  Languages,
  Lessons,
  Links
]

const View = ( { loggedUser, tabKey, changeTab, classes } ) => {

  const CurrentTabComponent = tabComponents[ tabKey ]

  return (
    <div className={ classes.root }>
      <AppBar className={ classes.appBar } position="static">
        <div className="container">
          <Tabs value={ tabKey } onChange={ changeTab } fullWidth>
            <Tab label="Perfil"/>
            <Tab label="Formação"/>
            <Tab label="Projetos"/>
            <Tab label="Habilidades"/>
            <Tab label="Interesses"/>
            <Tab label="Idiomas"/>
            <Tab label="Atividades"/>
            <Tab label="Links"/>
          </Tabs>
        </div>
      </AppBar>
      <div>
        <div className="container">
          <div className={ classes.wrapper }>
            <CurrentTabComponent loggedUser={ loggedUser }/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles( styles )( View )