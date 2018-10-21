import React, { Component } from "react";
import { Navbar } from "./navigation/";
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
      myCourses: [],
      displayName: ""
    };
  }

  componentDidMount() {
    const uid = auth.getCurrentUserId();

    db.getMyCourses(uid).then(snapshot => {
      snapshot.data().courses.forEach(e => {
        e.get().then(p => {
          this.setState({
            myCourses: [...this.state.myCourses, p.data()]
          });
        });
      });
    });

    //this.setState({ displayName: auth.getCurrentUser() });
    //console.log("User: " + auth.getCurrentUser());

    this.setState({ displayName: auth.getCurrentUser() });
  }

  render() {
    const { myCourses } = this.state;

    return (
      <div>
        <Navbar user={this.state.displayName} />
        <div id="wrapper">
          {!!myCourses && <CourseList myCourses={myCourses} />}
        </div>
      </div>
    );
  }
}

const CourseList = ({ myCourses }) => (
  <div>
    <h2>My courses</h2>
    <hr />

    <div class="d-flex flex-wrap justify-content-between">
      {Object.keys(myCourses).map(key => (
        <Card
          key={key}
          courseCode={myCourses[key].courseCode}
          courseName={myCourses[key].courseName}
        />
      ))}
    </div>
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Dashboard);
