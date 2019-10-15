import React, { Component } from "react";
//import { connect } from "react-redux";
//import * as actionCreators from "../redux/actions";
import { withNavigation } from "react-navigation";

//NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Container,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import { View } from "react-native";

class MealCard extends Component {
  render() {
    const { meal } = this.props;
    return (

        <ListItem button>
          {/* <Card >
            <CardItem>
              <Left>
                <Thumbnail
                  source={{ uri: meal.img }} //style={styles.thumbnail}
                /> */}
          <Text onPress={() => this.props.navigation.navigate("DetailScreen",{meal: meal})}>{meal.name}</Text>
          {/* </Left>
            </CardItem>
          </Card> */}
        </ListItem>

    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchChannelDetail: channelID =>
//       dispatch(actionCreators.fetchChannelDetail(channelID))
//   };
// };
export default withNavigation(MealCard);
