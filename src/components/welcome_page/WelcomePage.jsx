import Logo from "./logo.png";
import React, { Component } from "react";
import "./welcome_page.css";
import firebase from "../../firebase.js";

class WelcomePage extends React.Component {
  constructor() {
    super();
    this.navigate.bind(this);
  }
  navigate = () => {
    console.log("navigate");
    this.props.history.push("/navbar");
  };

  signin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function() {
        console.log(this.props.history);
        this.props.history.push("/navbar");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
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
                onClick={() => {
                  this.signin("test@gmail.com", "testtest");
                }}
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
