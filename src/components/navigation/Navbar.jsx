import React, { Component } from "react";
import {
  SearchBar,
  Logo,
  ProgressButton,
  FilterButton,
  AccountDropdown
} from "./index";

/**
 * A horizontal navigation bar that stays fixed at the top of the page.
 */
class Navbar extends Component {
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
