import React, { Component } from "react";
import { Motion, spring } from "react-motion";

class test extends Component {
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
      <div onClick={this.showMenu} className="progress-btndrop">
        <button type="button" className="btn">
          Shortcut
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
              className="progress-dropdown-content shortcutBtn"
            >
              <li className="#"> Emne 1 </li>
              <li className="#"> Emne 2 </li>
              <li className="#"> Emne 3 </li>
            </ul>
          )}
        </Motion>
      </div>
    );
  }
}

export default test;
