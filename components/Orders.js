import React, { Component } from "react";

//Clean dead code
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";

class Orders extends Component {
  state = {
    order: this.props.navigation.state.params.order.id
  };

  static navigationOptions = {
    title: "Order Detail"
  };
  //You should not have any errors in your code
  render() {
    return <></>;
  }
}

export default Orders;
