import React, { Component } from "react";
import Navbar from "../navigation/Navbar";
import "../../assets/css/study.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CollapsibleCourseTracker from "./CollapsibleCourseTracker";

class ProgressPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container w-50 pt-4">
          <div className="row">
            <div className="col">
              <Carousel showThumbs={false} emulateTouch>
                <CollapsibleCourseTracker
                  courseTitle="Sosial Nettverksteori"
                  courseCode="INFO207"
                />
                <CollapsibleCourseTracker
                  courseTitle="Digital Kultur"
                  courseCode="DIKULT101"
                />
                <CollapsibleCourseTracker
                  courseTitle="Systemutvikling"
                  courseCode="INFO212"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressPage;
