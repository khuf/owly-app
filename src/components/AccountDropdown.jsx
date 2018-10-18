import React, { Component } from "react";

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

    if (!this.state.showMenu) {
      this.setState({ showMenu: true });
    } else {
      this.setState({ showMenu: false });
    }
  }

  render() {
    return (
      <div onClick={this.showMenu} className="progress-btndrop">
        <button className="btn">Jacob</button>

        {this.state.showMenu ? (
          <ul className="progress-dropdown-content">
            <li className="#"> Profil </li>
            <li className="#"> Dashbord </li>
            <li className="#"> Logg ut </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default AccountDropdown;
