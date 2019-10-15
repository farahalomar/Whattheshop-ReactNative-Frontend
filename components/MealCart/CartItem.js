import React, { Component } from "react";
import * as actionCreators from "../../store/actions/coffeeActions";
import { connect } from "react-redux";

import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  List,
  Icon
} from "native-base";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}> {item.name} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.describtion}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{item.quantity}</Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.removeItemFromCart(item)}
          >
            <Icon name="trash" style={{ color: "white", fontSize: 20 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item =>
      dispatch(actionCreators.removeItemFromCart(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
