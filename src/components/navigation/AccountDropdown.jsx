import React, { Component } from "react";
import { auth } from "../../firebase";
import { Motion, spring } from "react-motion";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import LogOutIcon from "@material-ui/icons/ExitToAppOutlined";

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
              <li className="#">
                <DashboardIcon />
                Dashbord{" "}
              </li>
              <li className="#">
                <PersonIcon />
                Profil{" "}
              </li>
              <li className="#" onClick={auth.doSignOut}>
                <LogOutIcon />
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
