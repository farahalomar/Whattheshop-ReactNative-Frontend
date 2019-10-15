import { createStackNavigator } from "react-navigation-stack";

import LoginForm from "../components/LoginForm"; //Login
import SignupForm from "../components/SignupForm"; //Signup

import MealList from "../components/MealList";
import HomePage from "../components/HomePage";
import MealDetail from "../components/MealDetail";
const MyStackNav = createStackNavigator(
  {
    LoginScreen: LoginForm,
    SignupForm: SignupForm,
    MealScreen: MealList,
    DetailScreen: MealDetail,
    HomeScreen: HomePage
  },
  {
    initialRouteName: "HomeScreen",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default MyStackNav;
