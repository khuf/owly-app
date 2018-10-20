import React, { Component } from "react";
import Logo from "../assets/images/logo.png";
import "../assets/css/welcome_page.css";
import { auth } from "../firebase";
import { db } from "../firebase";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpPage extends Component {
  constructor() {
    super();
    /*
    * ... syntaksen betyr at hvert element i INITIAL_STATE skal bli lagt ut i state.
    * this.state vil se slik ut etterpå:
    * this.state = {
    *   username: "",
    *   email: "",
    *   passwordOne: "",
    *   passwordTwo: "",
    *   error: null
    * }
    */
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    //Object destructing, username, email, og password one blir lokale variabler
    //med verdien som tilsvarer de som finnes i this.state for username, email og passwordOne.
    const { username, email, passwordOne } = this.state;

    //this.props.history, fordi alle komponenter som eksporteres med withRouter() får props fra router.
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
          });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const byPropKey = (propertyName, value) => () => ({
      [propertyName]: value
    });
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    //Sjekk at passord og email felt ikke er tom. Vi sjekker også at passordOne og passordTo er lik.
    const isInvalid =
      username === "" ||
      passwordOne === "" ||
      passwordTwo === "" ||
      email === "" ||
      passwordOne !== passwordTwo;
    return (
      <div className="wrapper">
        <div className="logo_area">
          <img src={Logo} alt="logo" />
          <h1 className="text-white">Signup</h1>
        </div>

        <div align="center">
          <form className="loginForm" onSubmit={this.onSubmit}>
            <input
              value={username}
              onChange={event =>
                this.setState(byPropKey("username", event.target.value))
              }
              className="form-control form-control-lg form-control-borderless"
              placeholder="Enter username"
              autoFocus
            />

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
              value={passwordOne}
              type="password"
              onChange={event =>
                this.setState(byPropKey("passwordOne", event.target.value))
              }
              className="form-control form-control-lg form-control-borderless"
              placeholder="Enter password"
            />

            <input
              value={passwordTwo}
              type="password"
              onChange={event =>
                this.setState(byPropKey("passwordTwo", event.target.value))
              }
              className="form-control form-control-lg form-control-borderless"
              placeholder="Confirm password"
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

export default withRouter(SignUpPage);
