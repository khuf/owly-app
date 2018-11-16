import React, { Component } from "react";
import { Progress } from "reactstrap";

class ProgressBar extends Component {
  state = {};
  render() {
    return (
      <div className="progress_bar">
        <div className="text-center" />
        <Progress className="barstyle" value="55" color="danger" />
      </div>
    );
  }
}

export default ProgressBar;
