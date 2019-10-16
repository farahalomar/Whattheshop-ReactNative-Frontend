import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";
//import { withNavigation } from "react-navigation";

//NativeBase Components
import {
  Text,
  Left,
  Button,
  Container,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import CartButton from "./CartButton";

class MealDetail extends Component {
  handleAddItem = () => {
    this.props.addItemToCart(this.props.navigation.getParam("meal"));
  };
  static navigationOptions = {
    title: "Meal List",
    headerRight: <CartButton />
  };
  render() {
    const meal = this.props.navigation.getParam("meal");
    console.log("meal: ", meal);
    return (
      <Container>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{ uri: meal.img }} //style={styles.thumbnail}
              />
              <Text>{meal.name}</Text>
              <Text>Price: {meal.price}KD</Text>
              <Text>Description: {meal.description}</Text>
            </Left>
          </CardItem>
          <Button full danger onPress={this.handleAddItem}>
            <Text>Add to cart</Text>
          </Button>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.mealsReducer.meals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(actionCreators.addItemToCart(item))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealDetail);
