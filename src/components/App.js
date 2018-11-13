import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import WelcomePage from "./welcome_page/WelcomePage";
import SignUpPage from "./SignUpPage";
import * as routes from "../constants/routes";
import withAuthentication from "./withAuthentication";
import Dashboard from "./Dashboard";
import CardTemplate from "./card_template/ModalCard";
import ProgressPage from "./progress_page/ProgressPage";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path={routes.LANDING} component={WelcomePage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={WelcomePage} />
      <Route exact path={routes.HOME} component={Dashboard} />
      <Route exact path={routes.CARD_TEMPLATE} component={CardTemplate} />
      <Route exact path={routes.PROGRESS_PAGE} component={ProgressPage} />
    </div>
  </BrowserRouter>
);

export default withAuthentication(App);
