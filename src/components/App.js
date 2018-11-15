import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import WelcomePage from "./signin/WelcomePage";
import SignUpPage from "./signup/SignUpPage";
import * as routes from "../constants/routes";
import withAuthentication from "./auth/withAuthentication";
import Dashboard from "./dashboard/Dashboard";
import ProgressPage from "./progress/ProgressPage";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path={routes.LANDING} component={WelcomePage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={WelcomePage} />
      <Route exact path={routes.HOME} component={Dashboard} />
      <Route exact path={routes.PROGRESS_PAGE} component={ProgressPage} />
    </div>
  </BrowserRouter>
);

export default withAuthentication(App);
