import React, { Component } from "react";
import Navbar from "./Navbar";
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";
import { auth } from "../firebase";
import Card from "./card_template/card";
import "../assets/css/welcome_page.css";

class Dashboard extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      email: []
    };
  }

  componentDidMount() {
    db.onceGetCourses().then(snapshot =>
      snapshot.forEach(p => {
        console.log(p.data());
        this.setState({ courses: [...this.state.courses, p.data()] });
      })
    );

    const uid = auth.getCurrentUserId();

    console.log(db.onceGetCourses(uid).then(p => p.email));

    //console.log(doc.id, " => ", doc.data());
  }

  render() {
    const { courses } = this.state;

    return (
      <div>
        <Navbar />
        <div id="wrapper">{!!courses && <CourseList courses={courses} />}</div>
      </div>
    );
  }
}

const CourseList = ({ courses }) => (
  <div>
    <h2>List of courses</h2>

    <div class="d-flex flex-row justify-content-around">
      {Object.keys(courses).map(key => (
        <Card
          key={key}
          courseCode={courses[key].courseCode}
          courseName={courses[key].courseName}
        />
      ))}
    </div>
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Dashboard);
