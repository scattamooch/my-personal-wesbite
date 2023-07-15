import React from "react";
import {BrowserRouter as Router, Route, Switch, NavLink, Link} from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Hobbies from "./Components/Hobbies";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="component-container">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/Hobbies">
            <Hobbies />
          </Route>

          <Route path="/Projects">
            <Projects />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
