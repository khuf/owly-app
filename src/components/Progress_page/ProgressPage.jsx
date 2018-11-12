import React, { Component } from "react";
import Navbar from "../navigation/Navbar";
import "../../assets/css/studyStyleSheet.css";
import Collapsible from "./Collapsible";
import CollapsibleProgressTracker from "./components/CollapsibleProgressTracker";
import { Collapse } from "reactstrap";
import ThisMonth from "./components/ThisMonth";
import Upcoming from "./components/Upcoming";
import Finished from "./components/Finished";

const ProgressComponents = (
  <div>
    <CollapsibleProgressTracker header="This Week" component={<ThisMonth />} />
    <CollapsibleProgressTracker header="Upcoming" component={<Upcoming />} />
    <CollapsibleProgressTracker header="Finished" component={<Finished />} />
  </div>
);

class ProgressPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="collapsible">
          <Collapsible
            header="Systemutvikling"
            component={ProgressComponents}
          />
        </div>
      </div>
    );
  }
}

export default ProgressPage;
