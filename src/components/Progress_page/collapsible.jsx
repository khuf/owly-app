import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import ThisWeek from "./this_week";
import ProgressBar from "./progress_bar";
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
          <i id="i" class="fas fa-angle-down fa-3x" />
          COURSNAME/CODE
          <ProgressBar />
        </div>
        <Collapse isOpen={this.state.collapse}>
          <ThisWeek />
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
