import React, { Component } from "react";
import { Collapse } from "reactstrap";

import ProgressBar from "./Progress_Bar";

class ThisWeek extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });

    if (!this.state.collapse) {
      document.getElementById("o").className = "fas fa-angle-down fa-2x faster";
    } else {
      document.getElementById("o").className = "fas fa-angle-down fa-2x";
    }
  }

  render() {
    return (
      <div className="finishedContainer">
        <div className="finishedContent" onClick={this.toggle}>
          <i id="o" className="fas fa-angle-down fa-2x" />
          <h2 className="cNameSmall">THIS WEEK</h2>
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

export default ThisWeek;
