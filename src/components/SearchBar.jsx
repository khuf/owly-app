import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <input
        type="search"
        className="form-control form-control-lg form-control-borderless w-25"
        placeholder="Search for courses"
      />
    );
  }
}

export default SearchBar;
