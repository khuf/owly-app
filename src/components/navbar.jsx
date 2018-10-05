import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./button";

class NavBar extends Component {
  styles = {};
  render() {
    return (
      <nav
        style={this.styles}
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <span className="navbar-brand mb-5" />
        <Button />
        <Button />
        <Button />
        <Button />
      </nav>
    );
  }
}

export default NavBar;
