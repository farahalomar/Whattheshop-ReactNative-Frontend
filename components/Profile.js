import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components :
import { Container, Header, Title, Text, Thumbnail, Card } from "native-base";
import { View } from "react-native";

// Actions :
import { fetchProfile } from "../redux/actions/profileAction";

class Profile extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.fetchProfile();
    } else {
      return this.props.navigation.navigate("LoginScreen");
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.user !== this.props.user) this.props.fetchProfile();
  }

  handlePress = () => {
    this.props.navigation.navigate(`/profile/${ordersList.id}`);
    console.log("Hellloooooo !!!");
  };

  render() {
    if (!this.props.user) {
      return this.props.navigation.navigate("LoginScreen");
    }

    this.props.loaging ? "true" : " ";

    const profile = this.props.profile;
    const user = this.props.user;
    const ordersList = profile.orders_list;

    let orderHistory = [];
    if (ordersList) {
      ordersList.forEach(order => {
        orderHistory.push(
          // order.mealorders.map(orderItem => (
          <Text>Order ID : {order.id}</Text>
          // ))
        );
      });
    }
    return (
      <>
        <Header>
          <Title>{user.name}'s Profile</Title>
        </Header>

        {/* <Text> WHERE IS MY PROFILE : ' ( ???????</Text> */}

        <Thumbnail
          source={{ uri: profile.profilepic }}
          style={{ width: 150, height: 150 }}
        />

        <Text>
          Full Name: {profile.firstname} {profile.lastname}
        </Text>
        <Text>Contact Info: {profile.contact}</Text>
        <Text>e-mail: {profile.email}</Text>
        <Text> -------------------------------------- </Text>
        <Text>* Orders History: </Text>
        <View onPress={this.handlePress}>{orderHistory}</View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    user: state.authReducer,
    loaging: state.profileReducer.loaging
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => dispatch(fetchProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
