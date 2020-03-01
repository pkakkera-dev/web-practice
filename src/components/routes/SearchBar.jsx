import React, { Component } from "react";
import API from "../hoc/API";

let queyval = "";
class SearchBar extends Component {
  state = {
    searchValue: ""
  };

  handleSearch = event => {
    queyval = event.target.value;
    this.props.onSearch(queyval);
    this.setState({
      searchValue: queyval
    });
  };
  render() {
    return (
      <div className="searchBar">
        <input
          type="text"
          className="inputSearch"
          value={this.state.searchValue}
          placeholder="Search here...."
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}
export default SearchBar;
