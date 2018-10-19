import React, { Component } from "react";
import Logo from "../assets/images/logo.png";
import "../assets/css/welcome_page.css";

class SignUpPage extends Component {
  state = {};

  render() {
    const byPropKey = (propertyName, value) => () => ({
      [propertyName]: value
    });
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <div className="wrapper">
        <div className="logo_area">
          <img src={Logo} alt="logo" />
          <h1 className="text-white">
            WELCOME TO
            <span className="owly-text"> OWLY</span>
            <br />
            <h3>Your personal study companion</h3>
          </h1>
        </div>

        <div align="center">
          <form className="loginForm" onSubmit={this.onSubmit}>
            <input
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
              className="form-control form-control-lg form-control-borderless"
              placeholder="Enter e-mail"
              autoFocus
            />

            <input
              value={password}
              type="password"
              onChange={event =>
                this.setState(byPropKey("password", event.target.value))
              }
              className="form-control form-control-lg form-control-borderless"
              placeholder="Enter password"
            />

            {error && <p className="text-white">{error.message}</p>}

            <div className="form-controls-inline" align="center">
              <input
                type="search"
                className="form-control form-control-lg form-control-borderless"
                placeholder="Search for courses"
              />

              <button
                disabled={isInvalid}
                className="btn"
                id="btn"
                type="submit"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
