import LoginForm from "./components/LoginForm";
import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./redux/reducers";
import { checkForExpiredToken } from "./redux/actions";
import SignupForm from "./components/SignupForm";
import Homepage from "./components/Homepage/Homepage";

store.dispatch(checkForExpiredToken());
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
      <Homepage/>
      // {/* <Provider store={store}>
       
        // <LoginForm />

      // {/* will be removed after navigation */}
        // <SignupForm/> 
      // </Provider> */}
    );
  }
 }
 