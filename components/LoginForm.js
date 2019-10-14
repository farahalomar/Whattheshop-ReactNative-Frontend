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
import { login, signup } from "../redux/actions";


class LoginForm extends Component {
 state = {
   username: "",
   password: ""
 };
 handleChange = keyValue => {
   // console.log("this is the object" + object);
   this.setState(keyValue);
 };
 handleSubmitLogin = event => {
   this.props.login(this.state);
 };
 
 render() {
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
           
         </Form>
       </Content>
     </Container>
   );
 }
}
const mapDispatchToProps = dispatch => {
 return {
   login: userData => dispatch(login(userData)),
 };
};
export default connect(
 null,
 mapDispatchToProps
)(LoginForm);