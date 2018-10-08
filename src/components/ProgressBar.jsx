import React, { Component } from "react";

class ProgressBar extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column w-25">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="69"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: +"69" + "%" }}
          />
        </div>
      </div>
    );
  }
}

export default ProgressBar;
