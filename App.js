import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./redux/index";
import { checkForExpiredToken, fetchMeals } from "./redux/actions";
import AppContainer from "./Navigation/index";
//import LoginForm from "./components/LoginForm";
//import SignupForm from "./components/SignupForm";
import HomePage from "./components/HomePage/index";
store.dispatch(fetchMeals());
//store.dispatch(checkForExpiredToken());

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
