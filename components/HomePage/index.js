import React, { Component } from "react";
import { View, Text } from "react-native";

// NativeBase Components
import { Container, Header, Button } from "native-base";
import AppContainer from "../../Navigation/index";

// Style
import styles from "./styles";

const HomePage = (props) => {
  return (
    <Container style={styles.transparent}>
      <View style={styles.overlay}>
      <Button
          full
          success
          //onPress={() => alert("please!!")}
          onPress={() => props.navigation.replace("MealScreen")}
        ><Text>Meals</Text></Button>
      </View>
      <Header style={styles.transparent} />
      
    </Container>
  );
};

export default HomePage;