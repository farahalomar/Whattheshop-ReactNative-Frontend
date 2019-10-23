import React, { Component } from "react";
import { connect } from "react-redux";
import { AppLoading } from "expo";

// NativeBase Components :
import { Container, Header, Title, Text, Thumbnail, Card } from "native-base";
import { View } from "react-native";

// Actions :
import { fetchProfile } from "../redux/actions/profileAction";
import { fetchOrders } from "../redux/actions/orderAction";

import Default from "./icon.png";
class Profile extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.fetchProfile();
      this.props.fetchOrders();
    } else {
      return this.props.navigation.navigate("LoginScreen");
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.user.profile !== this.props.user.profile)
      this.props.fetchProfile();
    this.props.fetchOrders();
  }

  render() {
    if (this.props.loading) return <AppLoading />;
    if (!this.props.user) {
      return this.props.navigation.navigate("LoginScreen");
    }

    const profile = this.props.profile;
    let orders_list = this.props.profile.orders_list;
    const user = this.props.user;
    let image = profile.pic;
    if (!image) image = Default;

    let orderHistory = [];
    if (this.props.profile.orders_list) {
      this.props.profile.orders_list.forEach(order => {
        orderHistory.push(
          <Text
            onPress={() =>
              this.props.navigation.navigate("Orders", { order: order })
            }
          >
            {order.id}
          </Text>
        );
      });
    }

    return (
      <>
        <Header>
          <Title>{this.props.profile.user.username}'s Profile</Title>
        </Header>

        <Thumbnail source={image} style={{ width: 150, height: 150 }} />

        <Text>
          Full Name: {this.props.profile.user.first_name}{" "}
          {this.props.profile.user.last_name}
        </Text>
        <Text>Contact Info: {this.props.profile.contact}</Text>
        <Text>e-mail: {this.props.profile.user.email}</Text>
        <Text> -------------------------------------- </Text>
        <Text> Orders History: </Text>
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
    fetchOrders: () => dispatch(fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
