import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/navbar.css";

class Logo extends Component {
  state = {};
  render() {
    return <img className="logo" src={logo} alt="logo" />;
  }
}

export default Logo;
