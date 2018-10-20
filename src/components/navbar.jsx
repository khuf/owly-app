import React, { Component } from "react";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar.jsx";
import Logo from "./Logo.jsx";
import ProgressBar from "./ProgressBar.jsx";
import AccountDropdown from "./AccountDropdown";
import ProgressButton from "./ProgressButton";
import { auth } from "firebase";
import AuthUserContext from "./AuthUserContext";
import withAuthorization from "./withAuthorization";

class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log(props.authUser);
  }
  render() {
    return (
      <nav className="navbar bg-dark justify-content-around">
        <AccountDropdown />
        <SearchBar autofocus="true" />
        <Logo />
        <ProgressButton />
        <FilterButton />
      </nav>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Navbar);
