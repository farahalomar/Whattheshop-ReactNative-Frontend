import React, { Component } from "react";
import * as actionCreators from "../../redux/actions/mealsAction";
import { connect } from "react-redux";

import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  List,
  Icon,
  Container,
  View
} from "native-base";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    let meal = this.props.meals.find(meal => meal.id === item.meal);
    return (
      <Container>
        <View>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Text style={{ marginLeft: 16 }}> {meal.name} </Text>
              <Text style={{ marginLeft: 16 }}> {meal.price} KD </Text>
            </Left>
            <Body>
              <Text>{item.quantity}</Text>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => this.props.removeItemFromCart(item)}
              >
                <Icon name="trash" style={{ fontSize: 20 }} />
              </Button>
            </Right>
          </ListItem>
        </View>
      </Container>
    );
  }
}

const mapStateToprops = state => {
  return {
    meals: state.mealsReducer.meals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item =>
      dispatch(actionCreators.removeItemFromCart(item))
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(CartItem);
