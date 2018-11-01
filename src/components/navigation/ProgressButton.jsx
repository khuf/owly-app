import React, { Component } from "react";
import "../../assets/css/navbar.css";

class PorgressButton extends Component {
  render() {
    return (
      <button className="btn" onClick={this.getItems}>
        Progress
      </button>
    );
  }
}

export default PorgressButton;
