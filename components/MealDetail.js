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
  state = {
    name: "",
    price: 0,
    img: null,
    quantity: 1
  };
  handleAddItem = () => {
    const Newmeal = {
      ...this.state
    };
    this.props.addItemToCart(Newmeal);
  };
  static navigationOptions = {
    title: "Meal List",
    headerRight: <CartButton />
  };
  componentDidMount() {
    let meal = this.props.navigation.getParam("meal");
    if (meal) {
      this.setState({ name: meal.name, price: meal.price, img: meal.img });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.meals !== this.props.meals) {
      let meal = this.props.navigation.getParam("meal");
      if (meal) {
        this.setState({ name: meal.name, price: meal.price, img: meal.img });
      }
    }
  }
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
