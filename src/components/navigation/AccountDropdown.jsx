import React, { Component } from "react";
import { auth } from "../../firebase";
import { Motion, spring } from "react-motion";

class AccountDropdown extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return (
      <div onClick={this.showMenu} className="progress-btndrop userBtn">
        <button type="button" className="btn">
          {this.props.user}
        </button>
        <Motion
          defaultStyle={{ x: -200, opacity: 0 }}
          style={{
            x: spring(this.state.showMenu ? 0 : -200),
            opacity: spring(this.state.showMenu ? 1 : 0)
          }}
        >
          {style => (
            <ul
              style={{
                transform: `translateX(${style.x}px)`,
                opacity: style.opacity
              }}
              className="progress-dropdown-content accountBtn"
            >
              <li className="#"> Profil </li>
              <li className="#"> Dashbord </li>
              <li className="#" onClick={auth.doSignOut}>
                Logg ut
              </li>
            </ul>
          )}
        </Motion>
      </div>
    );
  }
}

export default AccountDropdown;
