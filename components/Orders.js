import React, { Component } from "react";
import { Container, Text, Thumbnail } from "native-base";
import { connect } from "react-redux";

// Navigations
// import { withNavigation } from "react-navigation";

// Actions
import { Header } from "react-navigation-stack";

class Orders extends Component {
  state = {
    order: this.props.navigation.state.params.order.id
  };

  static navigationOptions = {
    title: "Order Detail"
  };

  componentDidMount() {
    let order = this.props.navigation.getParam("order");
    if (order) {
      this.setState({
        name: order.name,
        price: order.price,
        description: order.description,
        quantity: order.quantity,
        img: order.img
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.orders !== this.props.orders) {
      // let order = this.props.navigation.getParam("order");
      let order = this.props.orders.find(order => order.id == orderID);
      if (order) {
        this.setState({
          name: order.name,
          price: order.price,
          description: order.description,
          quantity: order.quantity,
          img: order.img
        });
      }
    }
  }

  render() {
    const order = this.props.navigation.getParam("order");

    return (
      <Container>
        <Thumbnail
          source={{ uri: order.mealorders.meal.img }}
          style={{ width: 150, height: 150 }}
        />
        <Text>Meal Name: {order.mealorders.meal.name}</Text>
        <Text>Price: {order.mealorders.meal.price}</Text>
        <Text>Description: {order.mealorders.meal.description}</Text>
        <Text>Quantity: {order.mealorders.quantity}</Text>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orderReducer.orders
  };
};

export default connect(mapStateToProps)(Orders);
