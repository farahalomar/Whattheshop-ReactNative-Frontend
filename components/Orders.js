import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";

class Orders extends Component {
    state = {
        order: this.props.navigation.state.params.order.id,
      };

    static navigationOptions = {
        title: "Order Detail",
      };

    

    render () {

        return (


        )
    }
}

export default Orders