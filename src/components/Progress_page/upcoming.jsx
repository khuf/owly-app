import React, { Component } from "react";
import { Collapse } from "reactstrap";

import ProgressBar from "./progress_bar";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });

    if (!this.state.collapse) {
      document.getElementById("w").className = "fas fa-angle-down fa-2x faster";
    } else {
      document.getElementById("w").className = "fas fa-angle-down fa-2x";
    }
  }

  render() {
    return (
      <div className="finishedContainer">
        <div className="finishedContent" onClick={this.toggle}>
          <i id="w" className="fas fa-angle-down fa-2x" />
          <h2 className="cNameSmall">UPCOMING</h2>
          <ProgressBar className="progressbarSmall" />
        </div>

        <Collapse isOpen={this.state.collapse}>
          <div className="materialContainer">
            <div className="material">
              <h4 className="titletext">CHAPTER BLABLALBA</h4>
            </div>
            <i class="fas fa-check fa-3x" />
            <div className="material">
              <h4 className="titletext">CHAPTER BLABLALBA</h4>
            </div>
            <i class="fas fa-check fa-3x" />
            <div className="material">
              <h4 className="titletext">CHAPTER BLABLALBA</h4>
            </div>
            <i class="fas fa-check fa-3x" />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;