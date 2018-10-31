import React, { Component } from "react";
import { Collapse } from "reactstrap";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="finishedContainer">
        <div className="finishedContent" onClick={this.toggle}>
          THIS WEEK
        </div>
        <Collapse isOpen={this.state.collapse}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
