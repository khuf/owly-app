import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import "../components/Navbar.css";

class Logo extends Component {
  state = {};
  render() {
    return <img className="logo" src={logo} alt="logo" />;
  }
}

export default Logo;
