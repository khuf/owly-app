import React, { Component } from "react";
import { Collapse } from "reactstrap";
import ProgressBar from "./components/ProgressBar";
import "@fortawesome/fontawesome-free/css/all.css";

class Collapsible extends Component {
  /**
   * We set the initial state of the component. Empty header and the container should be collapsed.
   */
  state = {
    header: "",
    isCollapsed: false,
    component: null
  };
  constructor(props) {
    super(props);

    this.state = {
      header: props.header,
      isCollapsed: props.header,
      component: props.component
    };
  }

  /**
   * Toggles the visiblity of the items that this container holds.
   */
  toggle = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  toggleArrowClass = () => {
    return this.state.isCollapsed
      ? "fas fa-angle-down fa-3x faster"
      : "fas fa-angle-down fa-3x up";
  };

  render() {
    return (
      <div className="studyContainer">
        <div
          className="studyCourse"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          <i id="i" className={this.toggleArrowClass()} />
          <h3 className="cName">{this.state.header}</h3>
          <ProgressBar />
        </div>
        <hr />
        <Collapse isOpen={this.state.isCollapsed}>
          {this.state.component}
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
