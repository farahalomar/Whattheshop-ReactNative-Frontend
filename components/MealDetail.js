import React, { Component } from "react";
import { connect } from "react-redux";
//import * as actionCreators from "../redux/actions";
//import { withNavigation } from "react-navigation";

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
  Thumbnail,
  Content
} from "native-base";
import { View } from "react-native";

class MealCard extends Component {
  render() {
    //const mealID = this.props.navigation.getParam("mealID");
    //const meal = meals.find(meal => mealID === meal.id);
    //const { meal } = this.props;
    const meal = this.props.navigation.getParam("meal");
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
export default connect(mapStateToProps)(MealCard);
