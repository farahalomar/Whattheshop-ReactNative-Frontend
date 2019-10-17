import React, { Component } from "react";
import { View, Text } from "react-native";

// NativeBase Components
import { Container, Header, Button } from "native-base";
import AppContainer from "../../Navigation/index";
import { connect } from "react-redux";

// Style
import styles from "./styles";

//Action
import { fetchMeals } from "../../redux/actions/mealsAction";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchMeals();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View>
          <Button
            full
            success
            //onPress={() => alert("please!!")}
            onPress={() => this.props.navigation.push("MealScreen")}
          >
            <Text>Meals</Text>
          </Button>

          <Button
            full
            warning
            //onPress={() => alert("please!!")}
            onPress={() => this.props.navigation.push("LoginScreen")}
          >
            <Text>Register</Text>
          </Button>
        </View>
        <Header style={styles.transparent} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMeals: () => dispatch(fetchMeals())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
