import React, { Component } from "react";
import "./welcome_page.css";
import Logo from "./logo.png";

class WelcomePage extends React.Component {
  navigate() {
    this.props.history.push("/navbar");
  }
  render() {
    return (
      <div className="wrapper">
        <div className="logo_area">
          <img src={Logo} alt="img" />
          <h1 class="text-white">WELCOME ALL FUCKING COCKBAGS!!</h1>
        </div>
        <div className="div">
          <button
            onClick={this.navigate.bind(this)}
            className="btn"
            id="btn"
            type="button"
          >
            LOGIN/REGISTER
          </button>

          <input
            id="input"
            type="search"
            className="form-control form-control-lg form-control-borderless"
            placeholder="Search for courses"
          />
        </div>
      </div>
    );
  }
}

export default WelcomePage;
