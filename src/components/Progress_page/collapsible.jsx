import React, { Component } from "react";
import { Collapse } from "reactstrap";
import ThisWeek from "./This_Week";
import Finished from "./Finished";
import Upcoming from "./Upcoming";
import ProgressBar from "./Progress_Bar";
import "@fortawesome/fontawesome-free/css/all.css";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });

    if (!this.state.collapse) {
      document.getElementById("i").className = "fas fa-angle-down fa-3x faster";
    } else {
      document.getElementById("i").className = "fas fa-angle-down fa-3x";
    }
  }

  render() {
    return (
      <div className="studyContainer">
        <div
          className="studyCourse"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          <i id="i" className="fas fa-angle-down fa-3x up" />
          <h3 className="cName">INFO212/SYSTEMUTVIKLING</h3>
          <ProgressBar />
        </div>
        <hr />
        <Collapse isOpen={this.state.collapse}>
          <ThisWeek />
          <Finished />
          <Upcoming />
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
