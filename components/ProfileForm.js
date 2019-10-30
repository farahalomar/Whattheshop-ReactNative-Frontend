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
import { profileUpdate } from "../redux/actions";

class ProfileUForm extends Component {
  state = {
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
    this.props.updateProfile(this.state);
    this.props.navigation.navigate("Profile");
  };
  render() {
    // const {
    //   first_name,
    //   last_name,
    //   email,
    //   contact
    // } = this.state;
    // this.props.user ? this.props.navigation.replace("ProfileScreen") : "";
    return (
      <Container>
        <Header />
        <Content>
          <Form>
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
              <Text>Update</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateProfile: userData => dispatch(updateProfile(userData))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ProfileUForm);
