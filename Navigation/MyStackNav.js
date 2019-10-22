import { createStackNavigator } from "react-navigation-stack";

// Authentication
import LoginForm from "../components/LoginForm"; //Login
import SignupForm from "../components/SignupForm"; //Signup

// Meals
import MealList from "../components/MealList";
import MealDetail from "../components/MealDetail";

// Components
import HomePage from "../components/HomePage";
import MealCart from "../components/MealCart";
import Profile from "../components/Profile";
import Orders from "../components/Orders";

const MyStackNav = createStackNavigator(
  {
    LoginScreen: LoginForm,
    SignupForm: SignupForm,
    MealScreen: MealList,
    DetailScreen: MealDetail,
    HomeScreen: HomePage,
    CartScreen: MealCart,
    Profile: Profile,
    Orders: Orders
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
