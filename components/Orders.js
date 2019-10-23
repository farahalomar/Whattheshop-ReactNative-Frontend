import React, { Component } from "react";
import { Container, Text, Thumbnail } from "native-base";
import { connect } from "react-redux";
import { AppLoading } from "expo";

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
  }

  render() {
    if (this.props.loading) return <AppLoading />;
    const order = this.props.navigation.getParam("order");

    const meals = order.mealorders.map(meal => (
      <div>
        <Text>Meal Name: {meal.meal.name}</Text>
        <img
          src={meal.meal.img}
          className="img-thumbnail img-fluid"
          alt={meal.meal.name}
        />
        <br></br>
        <Text>Price:{meal.meal.price} KD</Text>
        <br></br>
        <Text>Description: {meal.meal.description}</Text>
        <br></br>
        <Text>Quantity: {meal.quantity}</Text>
      </div>
    ));

    return <Container>{meals}</Container>;
  }
}

export default Orders;
