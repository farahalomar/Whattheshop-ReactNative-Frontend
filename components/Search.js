import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./../redux/actions/";
import { Item, Input, Container } from "native-base";

import { SearchBar } from "react-native-elements";

class Search extends Component {
  state = {
    searchQuery: ""
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
    this.props.filterMeals(query);
  };

  render() {
    const query = this.state.searchQuery;

    return (
      <SearchBar
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search Meals..."
        onChangeText={this.handleSearch}
        value={query}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterMeals: query => dispatch(actionCreators.filterMeals(query))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Search);
