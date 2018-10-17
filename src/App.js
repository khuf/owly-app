import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import WelcomePage from "./components/welcome_page/WelcomePage";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/card_template/card.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={WelcomePage} exact />
          <Route path="/navbar" component={Navbar} />
          <Route path="/card" component={Card} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
