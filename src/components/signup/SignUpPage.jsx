import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";
import "../../assets/css/welcome_page.css";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";

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
        auth.doUpdateProfileWithDisplayName(username);
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

    const isInvalid =
      username === "" ||
      passwordOne === "" ||
      passwordTwo === "" ||
      email === "" ||
      passwordOne !== passwordTwo;

    const SignUpForm = () => (
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

          <button disabled={isInvalid} className="btn" id="btn" type="submit">
            REGISTER
          </button>
        </div>
      </form>
    );

    return (
      <div className="container-fluid bg">
        <div className="col-lg-">
          <div className="logo_area">
            <img src={Logo} alt="logo" />
            <h1 className="text-white">Signup</h1>
          </div>
          <div align="center">{<SignUpForm />}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpPage);
