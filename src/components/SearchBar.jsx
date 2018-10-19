import React, { Component } from "react";
import "../components/SearchBar.css";

class SearchBar extends Component {
  state = {};

  constructor(props) {
    super();
  }
  render() {
    return (
      <input
        type="search"
        className="form-control form-control-lg form-control-borderless"
        placeholder="Search for courses"
        autofocus={this.props.autofocus}
      />
    );
  }
}

export default SearchBar;
