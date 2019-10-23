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
import { signup } from "../redux/actions";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    contact: ""
  };
  handleChange = keyValue => {
    // console.log("this is the object" + object);
    this.setState(keyValue);
  };

  handleSubmitSignup = () => {
    this.props.signup(this.state);
    this.props.navigation.navigate("MealScreen");
  };
  render() {
    const {
      username,
      password,
      first_name,
      last_name,
      email,
      contact
    } = this.state;
    this.props.user ? this.props.navigation.replace("MealScreen") : "";
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
            <Item>
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
            <Item>
              <Input
                name="first_name"
                value={first_name}
                placeholder="first_name"
                onChangeText={first_name =>
                  this.handleChange({ first_name: first_name })
                }
              />
            </Item>
            <Item>
              <Input
                name="last_name"
                value={last_name}
                placeholder="last_name"
                onChangeText={last_name =>
                  this.handleChange({ last_name: last_name })
                }
              />
            </Item>
            <Item>
              <Input
                name="email"
                value={email}
                placeholder="email"
                onChangeText={email => this.handleChange({ email: email })}
              />
            </Item>
            <Item last>
              <Input
                value={contact}
                placeholder="contact"
                name="contact"
                onChangeText={contact =>
                  this.handleChange({ contact: contact })
                }
              />
            </Item>

            <Button onPress={this.handleSubmitSignup}>
              <Text>SignUp</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signup: userData => dispatch(signup(userData))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
