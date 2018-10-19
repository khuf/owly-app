import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import WelcomePage from "./welcome_page/WelcomePage";
import Navbar from "./Navbar";
import Card from "./card_template/card.jsx";
import AddBooksPage from "./AddBooksPage";
import AccountPage from "./AccountPage";
import HomePage from "./Home";
import * as routes from "../constants/routes";

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
          <Route path={routes.HOME} component={HomePage} />
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
          <Route path="/add" component={AddBooksPage} />
          <Route path="/acc" component={Navbar} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const CourseCard = props => {
  return <Card courseCode={props.courseCode} courseTitle={props.courseTitle} />;
};

export default App;
