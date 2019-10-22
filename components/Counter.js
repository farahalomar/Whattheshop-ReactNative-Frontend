import React, { Component } from "react";
import { connect } from "react-redux";

// Remove unused imports
import { Text, View } from "native-base";
class Counter extends Component {
  render() {
    return <Text>{this.props.counter}</Text>;
  }
}
const mapStateToProps = state => ({
  counter: state.CartReducer.counter
});
export default connect(mapStateToProps)(Counter);
