import React, { Component } from "react";
//import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

//Actions
import { fetchMeals } from "../redux/actions/mealsAction";

//NativeBase Components
import { Button, Icon, Header, Title, Container, Text } from "native-base";
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

  // handleProfile = () => {
  //   if (this.props.user) return this.props.navigation.navigate("Profile");
  //   else return this.props.navigation.navigate("LoginScreen");
  // };

  render() {
    //Add a key to your map
    const mealCards = this.props.meals.map(meal => {
      return <MealCard meal={meal} />;
    });
    console.log("in list", this.props.meals);

    return (
      <Container>
        <Header>
          <Title>Meals List</Title>
        </Header>
        <View>
          {mealCards}
          <Text onPress={() => this.props.navigation.navigate("Profile")}>
            Profile
          </Text>
        </View>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    meals: state.mealsReducer.meals,
    user: state.authReducer
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
