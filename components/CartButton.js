import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import Counter from "./Counter";

class CartButton extends Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("CartScreen")}
        name="shoppingcart"
        type="AntDesign"
      >
        <Counter />
      </Icon>
    );
  }
}

const mapStateToProps = state => ({
  items: state.CartReducer.items
});

export default connect(mapStateToProps)(withNavigation(CartButton));
