import React from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Index from "./assets/pages/index"
import Questions from "./assets/pages/questions"
import Settings from "./assets/pages/settings"
import Game from "./assets/pages/game"

import "./assets/css/pages/index.css"
import "./assets/css/globals.css"
import "./assets/css/layout.css"
import "./assets/css/theme.css"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/settings">
          <Settings />
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