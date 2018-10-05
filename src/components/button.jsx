import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Button extends Component {
  styles = {
    margin: 20
  };

  render() {
    return (
      <button style={this.styles} type="button" class="btn btn-primary btn-lg">
        Primary
      </button>
    );
  }
}

export default Button;
