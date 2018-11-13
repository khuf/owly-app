import React, { Component } from "react";
import { Collapse } from "reactstrap";

import ProgressBar from "./ProgressBar";

class Collapsible extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      isCollapsed: false,
      component: this.props.component
    };
  }

  toggle = () => {
    this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
  };

  render() {
    return (
      <div className="pt-4">
        <div className="finishedContent" onClick={this.toggle}>
          <i
            id="o"
            className={
              this.state.isCollapsed
                ? "fas fa-angle-up fa-2x"
                : "fas fa-angle-down fa-2x"
            }
          />
          <h2 className="cNameSmall">{this.state.title}</h2>
          <ProgressBar className="progressbarSmall" />
        </div>
        <Collapse isOpen={this.state.isCollapsed}>
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="titletext">
                  CHAPTER BLABLALBA{" "}
                  <span>
                    <i class="fas fa-check fa-2x" />
                  </span>
                </h4>
                <h4 className="titletext">
                  CHAPTER BLABLALBA{" "}
                  <span>
                    <i class="fas fa-check fa-2x" />
                  </span>
                </h4>
                <h4 className="titletext">
                  CHAPTER BLABLALBA{" "}
                  <span>
                    <i class="fas fa-check fa-2x" />
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
