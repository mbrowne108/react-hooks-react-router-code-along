import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home.js"
import About from "./About.js"
import Login from "./Login.js"
import NavBar from "./NavBar.js"

function App() {
  return (
    <div>
        <NavBar />
        <Switch>
        <Route exact path="/about">
            <About />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        </Switch>
    </div>
  )
}

export default App
