import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import { Collapse } from "reactstrap";
import Collapsible from "./Collapsible";

class CollapsibleCourseTracker extends Component {
  state = {
    courseTitle: "",
    courseCode: "",
    isCollapsed: false
  };

  constructor(props) {
    super(props);

    this.state = {
      courseTitle: this.props.courseTitle,
      courseCode: this.props.courseCode,
      isCollapsed: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
  };

  render() {
    return (
      <div className="h-75vh">
        <h3 onClick={this.toggle}>
          {this.state.courseCode + " / " + this.state.courseTitle}
        </h3>
        <ProgressBar />
        <Collapse isOpen={this.state.isCollapsed}>
          {<Collapsible title="THIS WEEK" />}
          {<Collapsible title="THIS MONTH" />}
          {<Collapsible title="THIS UPCOMING" />}
        </Collapse>
      </div>
    );
  }
}

export default CollapsibleCourseTracker;
