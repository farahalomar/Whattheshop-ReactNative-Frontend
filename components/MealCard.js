import React, { Component } from "react";
//import { connect } from "react-redux";
//import * as actionCreators from "../redux/actions";
//import { withNavigation } from "react-navigation";

//NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Container
} from "native-base";
import { View } from "react-native";

class MealCard extends Component {
  render() {
    const { meal } = this.props;
    return (
      <Container>
        <ListItem button>
          {/* <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  source={{ uri: channel.image_url }} //style={styles.thumbnail}
                /> */}
          <Text>{meal.name}</Text>
          {/* </Left>
            </CardItem>
          </Card> */}
        </ListItem>
      </Container>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchChannelDetail: channelID =>
//       dispatch(actionCreators.fetchChannelDetail(channelID))
//   };
// };
export default MealCard;
