import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { render } from "react-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import "./style.css";
import "./App.css";

const App = () => {
  return (
    <Home />
    /*<Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
    */
  );
};

render(<App />, document.getElementById("root"));
