import React, { Component } from "react";
//import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

//Actions
import { fetchMeals } from "../redux/actions/mealsAction";

//NativeBase Components
import { Button, Icon, Header, Title, Container } from "native-base";
import { View } from "react-native";

//Components
import MealCard from "./MealCard";

// Cart :
import CartButton from "./CartButton";

class MealList extends Component {
  // componentDidMount() {
  //   this.props.fetchMeals();
  // }

  static navigationOptions = {
    title: "Meal List",
    headerRight: <CartButton />
  };

  render() {
    const mealCards = this.props.meals.map(meal => {
      return <MealCard meal={meal} />;
    });
    console.log("in list", this.props.meals);

    return (
      <Container>
        <Header>
          <Title>Meals List</Title>
        </Header>
        <View>{mealCards}</View>
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
    fetchMeals: () => dispatch(fetchMeals())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealList);
