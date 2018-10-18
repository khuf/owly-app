import React, { Component } from "react";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar.jsx";
import Logo from "./Logo.jsx";
import ProgressBar from "./ProgressBar.jsx";
import AccountDropdown from "./AccountDropdown";
import ProgressButton from "./ProgressButton";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar bg-dark justify-content-around">
        <AccountDropdown />
        <SearchBar />
        <Logo />
        <ProgressButton />
        <FilterButton />
      </nav>
    );
  }
}

export default Navbar;
