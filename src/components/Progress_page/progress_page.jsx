import React, { Component } from "react";
import Navbar from "../navigation/Navbar";
import "../../assets/css/studyStyleSheet.css";
import Collapsible from "./collapsible";

class ProgressPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="collapsible">
          <Collapsible />
        </div>
      </div>
    );
  }
}

export default ProgressPage;
