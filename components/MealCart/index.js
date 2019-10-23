import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/mealsAction";
import { fetchOrders } from "../../redux/actions/orderAction";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

class MealCart extends Component {
  handlePress = () => {
    this.props.user
      ? this.props.checkoutCart(this.props.items)
      : this.props.navigation.navigate("LoginScreen");
    this.props.fetchOrders();
  };

  total = () => {
    const total = this.props.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    if (total) {
      return total;
    }
    return 0;
  };

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

        <Text>Total Price: {this.total()}</Text>

        <Button
          full
          success
          onPress={() => this.props.navigation.navigate("MealScreen")}
        >
          <Text>Add items to cart</Text>
        </Button>
        {cartItems.length ? (
          <Button full danger onPress={this.handlePress}>
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
    },
    fetchOrders: () => {
      dispatch(fetchOrders());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealCart);
