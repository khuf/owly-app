import React, { Component } from "react";
import { Tooltip } from "reactstrap";

class CircularBadge extends Component {
  state = {
    tooltipOpen: false
  };

  constructor(props) {
    super();
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };
  render() {
    return (
      <div class="round" style={this.props.color} id={this.props.id}>
        <span class="fa-layers fa-fw rounded-circle">
          <i class={"text-white fas " + this.props.icon} />
          <span
            class="fa-layers-text fa-inverse"
            data-fa-transform="shrink-8 down-3"
          >
            {" "}
            {this.props.value}
          </span>
          <Tooltip
            placement="right"
            isOpen={this.state.tooltipOpen}
            target={this.props.id}
            toggle={this.toggle}
          >
            {this.props.value + " " + this.props.toolTipText}
          </Tooltip>
        </span>
      </div>
    );
  }
}

export default CircularBadge;
