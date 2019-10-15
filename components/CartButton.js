import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("MealCart")}
        name="shoppingcart"
        type="AntDesign"
      >
        {this.props.items.length}
      </Icon>
    );
  }
}

const mapStateToProps = state => ({
  items: state.CartReducer.items
});

export default connect(mapStateToProps)(withNavigation(CartButton));
