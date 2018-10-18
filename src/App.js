import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import WelcomePage from "./components/welcome_page/WelcomePage";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/card_template/card.jsx";

class App extends Component {
  cardProps = {
    courseCode: "INFO262",
    courseTitle: "SYSTEMUTVIKLING"
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={WelcomePage} exact />
          <Route path="/navbar" component={Navbar} />
          <Route
            path="/card"
            render={cardProps => (
              <Card
                {...cardProps}
                courseCode={this.cardProps.courseCode}
                courseName={this.cardProps.courseTitle}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const CourseCard = props => {
  return <Card courseCode={props.courseCode} courseTitle={props.courseTitle} />;
};

export default App;
