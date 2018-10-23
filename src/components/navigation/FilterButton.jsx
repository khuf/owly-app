import React, { Component } from "react";

class FilterButton extends Component {
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
        <button type="button" className="btn">
          Shortcut
        </button>
        {this.state.showMenu ? (
          <ul className="progress-dropdown-content">
            <li className="#"> Emne 1 </li>
            <li className="#"> Emne 2 </li>
            <li className="#"> Emne 3 </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default FilterButton;
