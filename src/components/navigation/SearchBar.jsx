import React, { Component } from "react";
import "../../assets/css/search_bar.css";

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
        autoFocus={true}
      />
    );
  }
}

export default SearchBar;
