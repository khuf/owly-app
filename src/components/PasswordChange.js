import React, { Component } from "react";
import { auth } from "../firebase/firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <form onSubmit={this.onSubmit}>
        <h3>Update password</h3>
        <div className="form-group">
          <label for="emailInput">Password</label>
          <input
            className="form-control"
            value={passwordOne}
            id="emailInput"
            onChange={event =>
              this.setState(byPropKey("passwordOne", event.target.value))
            }
            type="password"
            placeholder="New Password"
          />
          <label for="repeatEmailInput">Repeat password</label>
          <input
            className="form-control"
            value={passwordTwo}
            id="repeatEmailInput"
            onChange={event =>
              this.setState(byPropKey("passwordTwo", event.target.value))
            }
            type="password"
            placeholder="Confirm New Password"
          />
          <button className="form-control" disabled={isInvalid} type="submit">
            Reset My Password
          </button>

          {error && <p>{error.message}</p>}
        </div>
      </form>
    );
  }
}

export default PasswordChangeForm;
