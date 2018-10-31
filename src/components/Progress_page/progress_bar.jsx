import React, { Component } from "react";
import { Progress } from "reactstrap";

class ProgressBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="text-center">55%</div>
        <Progress value="55" />
      </div>
    );
  }
}

export default ProgressBar;
