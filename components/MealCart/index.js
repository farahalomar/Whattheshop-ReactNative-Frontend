import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/mealsAction";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

class MealCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}

        <Button
          full
          success
          onPress={() => this.props.navigation.navigate("MealScreen")}
        >
          <Text>Add items to cart</Text>
        </Button>

        {cartItems.length ? (
          <Button
            full
            danger
            onPress={() => this.props.checkoutCart(this.props.items)}
          >
            <Text>Checkout</Text>
          </Button>
        ) : (
          <Text> Thank you for donating ^_^</Text>
        )}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.CartReducer.items,
  user: state.authReducer
});

const mapDispatchToProps = dispatch => {
  return {
    checkoutCart: item => {
      dispatch(actionCreators.checkoutCart(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealCart);
