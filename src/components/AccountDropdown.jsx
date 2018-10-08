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
      <div>
        <button className="btn btn-info w-100" onClick={this.showMenu}>
          Jacob
        </button>

        {this.state.showMenu ? (
          <ul className="menu list-group w-100">
            <li className="list-group-item"> Profil </li>
            <li className="list-group-item"> Dashbord </li>
            <li className="list-group-item"> Logg ut </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default AccountDropdown;
