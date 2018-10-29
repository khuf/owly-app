import React, { Component } from "react";
import {
  SearchBar,
  Logo,
  ProgressButton,
  FilterButton,
  AccountDropdown
} from "./index";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar bg-dark ">
        <AccountDropdown user={this.props.user} />
        <SearchBar autofocus="true" />
        <Logo />
        <ProgressButton />
        <FilterButton />
      </nav>
    );
  }
}

export default Navbar;
