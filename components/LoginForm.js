import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import { connect } from "react-redux";
// Actions
import { login } from "../redux/actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    // console.log("this is the object" + object);
    this.setState(keyValue);
  };
  handleSubmitLogin = () => {
    this.props.login(this.state);
    this.props.navigation.navigate("MealScreen");
  };

  render() {
    {
      console.log("user:", this.props.user);
      this.props.user ? this.props.navigation.replace("MealScreen") : "";
    }
    const { username, password } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                name="username"
                value={username}
                placeholder="Username"
                onChangeText={username =>
                  this.handleChange({ username: username })
                }
              />
            </Item>
            <Item last>
              <Input
                value={password}
                placeholder="Password"
                secureTextEntry
                name="password"
                onChangeText={password =>
                  this.handleChange({ password: password })
                }
              />
            </Item>
            <Button onPress={this.handleSubmitLogin}>
              <Text>Login</Text>
            </Button>
            <Text onPress={() => this.props.navigation.push("SignupForm")}>
              Signup
            </Text>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer
});
const mapDispatchToProps = dispatch => {
  return {
    login: userData => dispatch(login(userData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
