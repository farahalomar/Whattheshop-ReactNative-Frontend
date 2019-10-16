import React, { Component } from "react";
import * as actionCreators from "../redux/actions";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

//NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Container,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import { View } from "react-native";
import { makeDirectoryAsync } from "expo-file-system";

class MealCard extends Component {
  handlePress = () => {
    this.props.addItemToCart(this.props.meal);
    // console.log("here", this.props.meal);
  };

  render() {
    const { meal } = this.props;
    return (
      <ListItem button>
        {/* <Card >
            <CardItem>
              <Left>
                <Thumbnail
                  source={{ uri: meal.img }} //style={styles.thumbnail}
                /> */}
        <Text
          onPress={() =>
            this.props.navigation.navigate("DetailScreen", { meal: meal })
          }
        >
          {meal.name}
        </Text>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Icon name="pluscircleo" type="AntDesign" />
          </Button>
        </Right>
        {/* </Left>
            </CardItem>
          </Card> */}
      </ListItem>
    );
  }
}

const mapStateToProps = state => ({
  cartReducer: state.CartReducer
});

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(actionCreators.addItemToCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(MealCard));
