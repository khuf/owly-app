import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import Filter from "./buttons/filter";
import Account from "./buttons/account";
import Progress from "./buttons/progress";
import Percent from "./buttons/percent";
import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="btn-container">
          <Filter />
          <Account />
          <Progress />
          <Percent />
        </div>
      </nav>
    );
  }
}

export default NavBar;
