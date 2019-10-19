import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/mealsAction";
// import { CheckBox } from "react-native-elements";
// import { CheckBox } from "react-native";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

class MealCart extends Component {
  // handlePress = () => {
  //   console.log(this.props.user);

  // if (this.props.user) return this.props.checkoutCart;
  // else return this.props.navigation.navigate("LoginScreen");

  // this.props.user
  //   ? this.props.checkoutCart
  //   : this.props.navigation.navigate("LoginScreen");
  // };

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

        {/* <CheckBox
          center
          title="Click Here"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked}
        /> */}

        {/* <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        /> */}

        {cartItems.length ? (
          <Button full danger onPress={this.props.checkoutCart}>
            {/* {console.log(this.props.user)} */}
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
  items: state.CartReducer.items
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
