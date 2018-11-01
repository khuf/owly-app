import React from "react";

import AuthUserContext from "./AuthUserContext";
import PasswordChangeForm from "./PasswordChange";
import withAuthorization from "./withAuthorization";
import bg from "../assets/images/frontpage_bck.png";
import ProfileImage from "./ProfileImage";
import CircularBadge from "./CircularBadge";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="container-fluid">
        <div className="row align-items-end">
          <ProfileImage />
          <p className="h4 align-self-center">Bob Tyler</p>
          <CircularBadge
            icon="fa-certificate"
            value="25"
            toolTipText="active courses"
            id="activeCourses"
            color={{ backgroundColor: "blue" }}
          />
          <CircularBadge
            icon="fa-book-reader"
            value="5"
            toolTipText="chapter read this week"
            id="chaptersRead"
          />
        </div>
        <div className="row">
          <div className="col">
            <h1>Account: {authUser.email}</h1>
            <PasswordChangeForm />
            <label class="badge badge-secondary rounded-circle">
              <i class="fas fa-certificate" />
            </label>
          </div>
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
