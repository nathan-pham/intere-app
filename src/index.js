import React from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Settings from "./assets/pages/settings"
import Index from "./assets/pages/index"
import About from "./assets/pages/about"
import Game from "./assets/pages/game"

import "./assets/css/pages/settings.css"
import "./assets/css/pages/index.css"
import "./assets/css/pages/about.css"
import "./assets/css/pages/game.css"

import "./assets/css/globals.css"
import "./assets/css/layout.css"
import "./assets/css/theme.css"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)