import Logo from "./logo.png";
import React, { Component } from "react";
import "./welcome_page.css";

class WelcomePage extends React.Component {
  navigate() {
    this.props.history.push("/navbar");
  }
  render() {
    return (
      <div className="wrapper">
        <div className="logo_area">
          <img src={Logo} alt="logo" />
          <h1 class="text-white">
            WELCOME TO
            <span class="owly-text"> OWLY</span>
            <br />
            <h3>Your personal study companion</h3>
          </h1>
        </div>

        <div align="center">
          <form className="loginForm">
            <input
              className="form-control form-control-lg form-control-borderless"
              placeholder="Enter username"
              autoFocus
            />

            <input
              className="form-control form-control-lg form-control-borderless"
              placeholder="Enter password"
            />

            <div className="form-controls-inline" align="center">
              <input
                type="search"
                className="form-control form-control-lg form-control-borderless"
                placeholder="Search for courses"
              />

              <button
                onClick={this.navigate.bind(this)}
                className="btn"
                id="btn"
                type="button"
              >
                LOGIN/REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
