import React, { Component } from "react";
import firebase from "../firebase.js";

class PorgressButton extends Component {
  getItems = () => {
    const itemsRef = firebase.database().ref("items");

    console.log(itemsRef);
  };
  render() {
    return (
      <button className="btn" onClick={this.getItems}>
        Progress
      </button>
    );
  }
}

export default PorgressButton;
