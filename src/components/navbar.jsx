import React, { Component } from "react";
<<<<<<< HEAD
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import AccountDropdown from "./AccountDropdown";
=======
//import "bootstrap/dist/css/bootstrap.css";
import Filter from "./buttons/filter";
import Account from "./buttons/account";
import Progress from "./buttons/progress";
import Percent from "./buttons/percent";
import "./navbar.css";
>>>>>>> origin/master

class NavBar extends Component {
  render() {
    return (
<<<<<<< HEAD
      <nav className="navbar navbar-expand-lg navbar-light bg-light row justify-content-around">
        <FilterButton />
        <SearchBar />
        <Logo />
        <ProgressBar />
        <AccountDropdown />
=======
      <nav className="nav">
        <div className="btn-container">
          <Filter />
          <Account />
          <Progress />
          <Percent />
        </div>
>>>>>>> origin/master
      </nav>
    );
  }
}

export default NavBar;
