import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/";
import * as routes from "../constants/routes";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MessageBox from "./MessageBox";

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  errorForget: null,
  modal: false
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE, modal: props.showModal };
  }

  sumbitResetPassword = event => {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(errorForget => {
        this.setState(byPropKey("errorForget", errorForget));
      });

    event.preventDefault();
  };

  render() {
    const { email, errorForget } = this.state;

    const isInvalid = email === "";

    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>Reset password</ModalHeader>
          <ModalBody>
            {errorForget && <p className="d-block">{errorForget.message}</p>}
            <form
              className="form-inline"
              name="passwordForget"
              onSubmit={this.sumbitResetPassword}
            >
              <div className="form-group">
                <input
                  className="form-control"
                  value={this.state.email}
                  onChange={event =>
                    this.setState(byPropKey("email", event.target.value))
                  }
                  type="text"
                  placeholder="Email Address"
                />
                <button
                  className="form-control ml-2"
                  disabled={isInvalid}
                  type="submit"
                >
                  Reset My Password
                </button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            {/*Provide color="primary" to make the button have the classes btn btn-primary */}
            <button className="form-control" onClick={this.props.toggle}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
