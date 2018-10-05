import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import "./button.css";

class Progress extends Component {
  styles = {
    margin: 20
  };

  render() {
    return (
      <button style={this.styles} type="button" className="button btn">
        Progress
      </button>
    );
  }
}

export default Progress;
