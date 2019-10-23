import React, { Component } from "react";
//import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

//Actions
import { fetchMeals, filterMeals } from "../redux/actions/mealsAction";

//NativeBase Components
import { Button, Icon, Header, Title, Container, Text } from "native-base";
import { View } from "react-native";

//Components
import MealCard from "./MealCard";
import Search from "./Search";

// Cart :
import CartButton from "./CartButton";

class MealList extends Component {
  state = {
    filteredMeals: []
  };
  componentDidMount = async () => {
    await this.props.fetchMeals();
    this.setState({
      filteredMeals: this.props.meals
    });
  };

  filterMeals = query => {
    query = query.toLowerCase();
    let filteredMeals = this.props.meals.filter(meal => {
      return `${meal.name}`.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredMeals: filteredMeals });
  };

  static navigationOptions = {
    title: "Meal List",
    headerRight: <CartButton />
  };

  // handleProfile = () => {
  //   if (this.props.user) return this.props.navigation.navigate("Profile");
  //   else return this.props.navigation.navigate("LoginScreen");
  // };

  render() {
    const mealCards = this.props.filteredMeals.map(meal => {
      return <MealCard meal={meal} />;
    });
    console.log("in list", this.props.meals);

    return (
      <Container>
        <Header>
          <Title>Meals List</Title>
        </Header>
        <View>
          <Search filter={this.filterMeals} />
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
    user: state.authReducer,
    filteredMeals: state.mealsReducer.filteredMeals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMeals: () => dispatch(fetchMeals()),
    filterMeals: query => dispatch(filterMeals(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealList);
