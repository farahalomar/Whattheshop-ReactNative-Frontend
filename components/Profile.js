import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components :
import {
  Container,
  Header,
  Title,
  Text,
  Thumbnail,
  Card,
  Right
} from "native-base";
import { View, Image } from "react-native";

// Actions :
import { fetchProfile } from "../redux/actions/profileAction";
import { logout } from "../redux/actions";

class Profile extends Component {
  componentDidMount() {
    this.props.user
      ? this.props.fetchProfile()
      : this.props.navigation.navigate("LoginScreen");
  }

  componentDidUpdate(prevState) {
    if (prevState.user !== this.props.user) this.props.fetchProfile();
  }

  handleLogout = () => {
    // this.props.user
    //   ? (this.props.logout(), this.props.navigation.navigate("MealScreen"))
    //   : "";

    this.props.logout();
    this.props.navigation.replace("MealScreen");
  };

  render() {
    /**
     * This should be an if
     */
    // this.props.user ? " " : this.props.navigation.navigate("LoginScreen");

    this.props.loading ? "true" : " ";

    const profile = this.props.profile;
    const user = this.props.user;
    const ordersList = profile.orders_list;

    console.log("profile:", profile.orders_list);
    let orderHistory = [];
    if (ordersList) {
      ordersList.forEach(order => {
        orderHistory.push(
          // order.mealorders.map(orderItem => (
          <Text>(Order ID : {order.id})</Text>
          // ))
        );
      });
    }
    return (
      <>
        <Header>
          {/* <Title>{user.name}'s Profile</Title> */}
          <Right>
            <Text onPress={this.handleLogout}>Logout</Text>
          </Right>
        </Header>

        {/* <Text> WHERE IS MY PROFILE : ' ( ???????</Text> */}

        <Thumbnail
          source={{ uri: profile.pic }}
          style={{ width: 150, height: 150 }}
        />

        <Text>
          {/* Full Name: {profile.user.first_name} {profile.user.last_name} */}
        </Text>
        <Text>Contact Info: {profile.contact}</Text>
        {/* <Text>e-mail: {profile.user.email}</Text> */}
        <Text> -------------------------------------- </Text>
        <Text>* Orders History: </Text>
        <View>{orderHistory}</View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    user: state.authReducer,
    loading: state.profileReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => dispatch(fetchProfile()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
