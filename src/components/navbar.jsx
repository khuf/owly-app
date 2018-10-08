import React, { Component } from "react";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import AccountDropdown from "./AccountDropdown";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light row justify-content-around">
        <FilterButton />
        <SearchBar />
        <Logo />
        <ProgressBar />
        <AccountDropdown />
      </nav>
    );
  }
}

export default Navbar;
