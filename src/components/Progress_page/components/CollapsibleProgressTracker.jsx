import React, { Component } from "react";
import { Collapse } from "reactstrap";
import ProgressBar from "./ProgressBar";

const ChapterCollection = (
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
);

class CollapsibleProgressTracker extends Component {
  state = {
    header: "",
    isCollapsed: false,
    component: null
  };

  constructor(props) {
    super(props);

    this.state = {
      header: props.header,
      isCollapsed: false,
      component: props.component
    };
  }
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
      <div onClick={() => this.toggle()} className="finishedContainer">
        <i id="o" className={this.toggleArrowClass()} />
        <h2 className="cNameSmall">THIS WEEK</h2>
        <ProgressBar className="progressbarSmall" />
        <Collapse isOpen={this.state.isCollapsed}>
          {this.state.component}
        </Collapse>
      </div>
    );
  }
}

export default CollapsibleProgressTracker;
