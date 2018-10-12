import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/welcome_page/WelcomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomePage />
      </div>
    );
  }
}

export default App;
